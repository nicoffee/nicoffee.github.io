var tree = document.querySelector('.tree');

    var treeLis = tree.getElementsByTagName('li');
    var treeUls = tree.getElementsByTagName('ul');

    /* wrap all textNodes into spans */
    for (var i = 0; i < treeLis.length; i++) {
      var li = treeLis[i];

      var span = document.createElement('span');
      li.insertBefore(span, li.firstChild);
      span.appendChild(span.nextSibling);
    }

    for (var i = 0; i < treeUls.length; i++) {
    	treeUls[i].hidden = true;
  	}

    /* catch clicks on whole tree */
    tree.onclick = function(event) {
      var target = event.target;

      if (target.tagName != 'SPAN') {
        return;
      }

      /* now we know the SPAN is clicked */
      var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
      if (!childrenContainer) return; // no children

      childrenContainer.hidden = !childrenContainer.hidden;
}