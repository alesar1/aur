# Maintainer: Sam Stuewe <halosghost at archlinux dot info>
# Contributor: mjheagle <mjheagle8@gmail.com>
_name='zsh-syntax-highlighting'
pkgname="${_name}-git"
pkgver=0.2.1.452.e60737d
pkgrel=1
pkgdesc='Fish shell like syntax highlighting for Zsh'
url='https://github.com/zsh-users/zsh-syntax-highlighting'
arch=('any')
license=('Custom')
depends=('zsh>=4.3.9')
makedepends=('git')
provides=('zsh-syntax-highlighting')
conflicts=('zsh-syntax-highlighting')
install="${_name}.install"
source=("${_name}::${url//https/git}")
sha256sums=('SKIP')

pkgver() {
   cd "${srcdir}/${_name}"
   echo "0.2.1.$(git rev-list --count HEAD).$(git describe --always )"
}

package() {
    cd "${srcdir}/${_name}"
    make DESTDIR="${pkgdir}" PREFIX='/usr' install
}
