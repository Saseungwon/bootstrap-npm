// 성능 최적화(트리쉐이킹)을 위해 번들 전체가 아닌 필요한 것들만 가져오기
import Dropdown from 'bootstrap/js/dist/dropdown'

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl))
