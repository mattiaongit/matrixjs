/*
Simple Matrix javascript library to perform matrix operations

author: Mattia Dimauro
Created on May 2013
*/


// scalar times matrix
function sxm(s,m){
	var sm = new Array();
	for(var i=0; i<m.length; i++){
		var newRow = new Array();
		for(var j=0; j < m.length; j++){
			newRow.push(s*m[i][j]);
		}
		sm.push(newRow);
	}
	return sm;
}

// transpose any square matrix
function transpose(m){
	var t = new Array();
	for(var i=0; i< m.length; i++){
		t.push(m[i]);
	}
	return _.zip.apply(null, t);
}


// base 2x2 Matrix operations
function base_determinant(m){
	return ((m[0][0] * m[1][1]) - (m[0][1] * m[1][0]));
}

function base_inverse(m){
	determinant = 1 / base_determinant(m);
	return [[determinant * m[1][1], determinant * -m[0][1]], [determinant * -m[1][0], determinant * m[0][0]] ];
}


function subMatrix(m,i,j){
	var submatrix = new Array();
	var l = m.length;
	for(var _i = 0; _i < l; _i++){

		var newRow = new Array();
		for(var _j=0; _j < l; _j++){

			if( i != _i && j != _j ){
				newRow.push(m[_i][_j]);
			}
		}
		if(newRow.length > 0)
			submatrix.push(newRow);
	}
	return submatrix;
}

function matrixVector(m,v){
	vec = new Array();
	for(var i=0; i<m.length; i++){
		var sum = 0;
		for(var j=0; j<v.length; j++){
			sum += m[i][j] * v[j];
		}
		vec.push(sum);
	}
	return vec;
}


function mxm(m,m2){
	var mm = new Array();
	for(var i = 0; i < m.length; i ++){
		mm.push(new Array());
		for(var j = 0; j < m2[0].length; j++){
			mm[i][j] = 0;
			for(k=0; k < m[0].length; k++){
				mm[i][j] = mm[i][j] + m[i][k] * m2[k][j]
			}
		}
	}
	return mm;
}




function memoize(f){
	var memo = {};
	function _f(){
		if(memo[arguments[0]] == undefined)
			memo[arguments[0]] = f.apply(null, arguments);
			return memo[arguments[0]];
	}
	return _f;
}


function determinant(m){
	var det = 0;
	if(m.length == 2){
		return base_determinant(m);
	}
	else{
		for(var i = 0; i < m.length; i++){
			det = ((i+1)%2 == 0) ? det - m[0][i] * determinant(subMatrix(m,0,i)) : det + m[0][i] * determinant(subMatrix(m,0,i));
		}
		return det;
	}
}



function adjugate(m){
	var adj = new Array();
	for(var i=0; i < m.length; i++){
		var newRow = new Array();
		for(var j = 0; j < m.length; j++){
			checkerboard = ((i+j) % 2 === 0) ? 1 : -1;
			newRow.push(determinant(subMatrix(m,i,j)) * checkerboard);
		}
		adj.push(newRow);
	}
	return adj;
}


function inverse(m){
	return sxm(1/determinant(m),transpose(adjugate(m)));
}



determinant = memoize(determinant);
inverse = memoize(inverse);
adjugate = memoize(adjugate);
transpose = memoize(transpose);
