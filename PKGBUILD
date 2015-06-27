# Contributor: Ondrej Kucera <ondrej.kucera@centrum.cz>

pkgname=css-2-docs
_version=20110607
pkgver=2.1.${_version}
pkgrel=1
pkgdesc="Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"
arch=('any')
url="http://www.w3.org/Style/CSS/"
license=(custom:"W3C document license")
options=('docs')
source=("http://www.w3.org/TR/2011/REC-CSS2-${_version}/css2.tgz")
md5sums=('1302f4bf35285879aeebf4ee9b282cb2')
noextract=('css2.tgz')
replaces=('css21-doc')

build() {
  cd "$srcdir"
  mkdir css-2
  cd css-2
  tar xaf ../css2.tgz

  # 20110607 CSS 2.1 recommendation images/clip.png wasn't world-readable
  chmod -R a+r .
}

package() {
  cd "$srcdir"
  mkdir -p "$pkgdir/usr/share/doc"
  cp -rf css-2 "$pkgdir/usr/share/doc"
}
