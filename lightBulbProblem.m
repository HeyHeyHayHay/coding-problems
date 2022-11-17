x = [0 2 9 2 5 8 7 3 1 9 4 3 5 8 10 0 1 2 9 5 10 11 12];
nbins = max(x);

[counts,centers] = hist(x, nbins);

counts

counts = mod(counts,2)