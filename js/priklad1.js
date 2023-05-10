
        function createGraph() {
            var data = [3, 5, 7, 2, 8, 10, 15];
            var width = 500;
            var height = 500;
            var barWidth = width / data.length;
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", width);
            svg.setAttribute("height", height);
            for (var i = 0; i < data.length; i++) {
                var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                bar.setAttribute("x", i * barWidth);
                bar.setAttribute("y", height - data[i]);
                bar.setAttribute("width", barWidth - 2);
                bar.setAttribute("height", data[i]);
                bar.setAttribute("fill", "blue");
                svg.appendChild(bar);
            }
            document.getElementById("graph").appendChild(svg);
        }
