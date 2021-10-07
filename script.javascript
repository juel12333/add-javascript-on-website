<script>
        var div =
            document.querySelector(".div2");
  
        div.addEventListener(
            "mousemove", function (e) {
                x = e.offsetX;
                y = e.offsetY;
                div.style.backgroundColor
                    = `rgb(${x}, ${y}, ${x - y})`;
});
</script>