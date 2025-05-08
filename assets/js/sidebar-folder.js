// function spread(count)
// {
//     document.getElementById('folder-checkbox-' + count).checked = 
//     !document.getElementById('folder-checkbox-' + count).checked
//     document.getElementById('spread-icon-' + count).innerHTML = 
//     document.getElementById('spread-icon-' + count).innerHTML == 'arrow_right' ?
//     'arrow_drop_down' : 'arrow_right'
// }

// 25.05.08 - Sub Menu 하위 추가로 인한 수정.
function spread(count)
{
    const checkbox = document.getElementById('folder-checkbox-' + count);
    const icon = document.getElementById('spread-icon-' + count);

    if(!checkbox || !icon) return;

    checkbox.checked = !checkbox.checked;
    icon.innerHTML = document.checked ? 'arrow_drop_down' : 'arrow_right';
}
