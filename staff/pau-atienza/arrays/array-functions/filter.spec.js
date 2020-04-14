describe('the method filter', function () {
    it('should return an empty array when the filtered array is empty', function () {
        var array = [];
        var result = [];
        
        result = filter(array, word => word.length > 6);

        expect(result.length).toBe(0);
    });

    it('should return the values of an array than meet a condition', function () {
        var array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        var result = filter(array, word => word.length > 6);

        expect(result[0]).toBe("exuberant");
        expect(result[1]).toBe("destruction");
        expect(result[2]).toBe("present");

    });
   
});