# Maintainer: Robosky <fangyuhao0612@gmail.com>

pkgname=tela-icon-theme-git
_gitname=Tela-icon-theme
pkgdesc="A flat colorful Design icon theme."
pkgver=25.3f7085f
pkgrel=1
arch=('any')
url="https://github.com/vinceliuice/Tela-icon-theme"
license=('GPL3')
source=("git+https://github.com/vinceliuice/Tela-icon-theme.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_gitname}"
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package() {
	cd "${srcdir}/${_gitname}"
	install -dm755 "${pkgdir}/"usr/share/icons
	sed -i '/gtk-update-icon-cache/d' Install
	./Install -d "${pkgdir}"/usr/share/icons
}
	
