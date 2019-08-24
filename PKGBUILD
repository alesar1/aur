# Maintainer: peeweep <peeweep at 0x0 dot ee>

pkgname=('course-crawler-git')
_pkgname=course-crawler
pkgdesc="中国大学MOOC、学堂在线、网易云课堂、好大学在线、爱课程 MOOC 课程下载。"
pkgver=20181219.78aa42c
pkgrel=2
url='https://mooc.xoy.io/'
arch=('any')
license=('MIT')
makedepends=('git')
depends=('python-beautifulsoup4' 'python-lxml' 'python-requests')
source=("${_pkgname}::git+https://github.com/Foair/course-crawler.git"
  ${_pkgname}.sh)
md5sums=('SKIP'
         '2f2a4cfd9c8ae2094365d0c31dc9c501')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git log -1 --format='%cd.%h' --date=short | tr -d -
}

package() {
  install -dm755 "${pkgdir}/usr/bin"
  install -m755 "${srcdir}/${_pkgname}.sh" "${pkgdir}/usr/bin/${_pkgname}"

  cd "${srcdir}/${_pkgname}"
  install -dm777 "${pkgdir}/usr/share/${_pkgname}"
  install -dm755 "${pkgdir}/usr/share/${_pkgname}/mooc"
  install -m644 mooc.py "${pkgdir}/usr/share/${_pkgname}/mooc.py"
  install -m644 LICENSE "${pkgdir}/usr/share/${_pkgname}/LICENSE"
  install -m644 mooc/*.py "${pkgdir}/usr/share/${_pkgname}/mooc"
}
