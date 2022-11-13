X = zeros([1,4]);
Y = zeros([1,4]);

U = [1 0 2 -1];
V = [0 1 3 -2];

M = [0 -1; 1 0]

quiver(X,Y,U,V)

Z = [U;V]

Z = M*Z


quiver(X,Y, Z(1,:), Z(2,:))
