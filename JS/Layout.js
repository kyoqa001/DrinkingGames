$(function () {
    var navigation = document.createElement('div');
    navigation.className = 'navigation';
    navigation.innerHTML = `<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="../index.html">Zen's Games</a>
      <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ruleModal">規則</button>
    </div>
  </nav>`;

    // var footer = document.createElement('footer');
    // footer.innerHTML = '';

    // 插入layout
    document.body.prepend(navigation);
    // document.body.appendChild(footer);
    document.getElementsByTagName('meta').viewport.content+=',user-scalable';
})
