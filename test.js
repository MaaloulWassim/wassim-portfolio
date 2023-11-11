    read(X)
    factors_with_repetition ← []
    facteurs_sans_rep ← []
    
    i ← 2
    
    WHILE i <= X DO
        IF X MOD i == 0 THEN
            factors_with_repetition.append(i)
            IF i NOT IN factors_without_repetition THEN
                 factors_without_repetition.append(i)
            END IF
            X ← X / i
        ELSE
            i ← i + 1
        END IF
    END WHILE


    PRINT ("Prime factors with repetition: ", factors_with_repetition)
    PRINT ("Number of prime factors with repetition: ", length(factors_with_repetition))
    PRINT ("Prime factors without repetition: ", factors_without_repetition)
    PRINT ("Number of prime factors without repetition: ", length(factors_without_repetition))

