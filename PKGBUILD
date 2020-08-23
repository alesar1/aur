# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
pkgname=plastex-git
pkgver=2.1.r146.g9369e35b
pkgrel=1
epoch=2
pkgdesc="Python-based LaTeX document processing framework"
arch=('any')
url="http://tiarno.github.io/plastex/"
license=('custom')
depends=('python' 'texlive-core')
makedepends=('git')
provides=('plastex')
conflicts=('plastex')
source=("git+https://github.com/tiarno/plastex.git")
md5sums=('SKIP')
_gitname="plastex"

pkgver() {
 cd ${pkgname%-git}
 git describe --tags | sed 's|-|.r|' |tr - .
}

#prepare() {
#  cd ${pkgname%-git}
#  find  . -name "*.py" -exec sed -i '1s+python+python2+' {} \;
#}

package() {
  cd ${pkgname%-git}
  python setup.py install --root="$pkgdir"/ 
  install -Dm644 LICENSE \
    "$pkgdir"/usr/share/licenses/$pkgname/LICENSE 
  for _i in  licenses/*
  do 
    install -Dm644 ${_i} "$pkgdir"/usr/share/licenses/$pkgname/${_i}
  done
}
