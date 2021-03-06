MatrixJS
========

Simple JS library to compute some of the basic matrix functions:

- Scalar matrix multiplication
```javascript
sxm(scalar,matrix)
```
e.g:
```javascript
scalar = 3
matrix = [[7,5,-10], [3,8,0]]
sm = sxm(scalar, matrix)

JSON.stringify(sm)
"[[21,15,-30],[9,24,0]]"
```


- Matrix vector multiplication
```javascript
matrixVector(m,v)
```

- Matrix matrix multiplication
```javascript
mxm(m,m2)
```

- Transpose a  matrix
```javascript
transpose(m)
```

-  Sub-matrix
```javascript
subMatrix(m,i,j)
```

- Determinant of a matrix
```javascript
determinant(m)
```

- Matrix adjugate
```javascript
adjugate(m)
```

- Matrix inverse
```javascript
inverse(m)
```


An example of this working can be seen at:
http://www.mattiadmr.com/regressor/

A simple JS regression visualizer, built to visually check and test this distance sensor: http://www.mattiadmr.com/sensorino/
