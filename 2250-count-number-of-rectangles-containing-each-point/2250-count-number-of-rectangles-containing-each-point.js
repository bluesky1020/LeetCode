/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
function lowerbound(arr, target)
    {
        var l = 0;
        var r = arr.length;
        while(l<r)
        {
            var mid = Math.floor((l+r)/2);
            if(arr[mid]>= target)
            {
                r = mid;
            }
            else
            {
                l = mid+1;
            }
        }
        return l;
    }

var countRectangles = function(rectangles, points) {
    let lines = [];
    for(let i = 0 ; i < rectangles.length ; i ++){
        let h = rectangles[i][1];
        let l = rectangles[i][0];
        if(lines[h] == undefined)
            lines[h] = [];
        lines[h].push(l);
    }
    for(let i = 0 ; i <= 100 ; i ++){
        if(lines[i] == undefined) continue;
        lines[i].sort((a,b)=>a-b);
    }
    let result = [];
    for(let i = 0 ; i < points.length; i ++){
        let y = points[i][1];
        let x = points[i][0];
        let sum = 0;
        for(let k = y ; k <= 100 ; k ++){
            if(lines[k] == undefined) continue;
            sum += lines[k].length-lowerbound(lines[k], x);
        }
        result.push(sum);
    }
    return result;
};