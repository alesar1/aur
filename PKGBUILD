# Maintainer: Robosky <fangyuhao0612@gmail.com>

pkgname=tela-icon-theme-git
_gitname=Tela-icon-theme
pkgdesc="A flat colorful Design icon theme."
pkgver=87.2f053185
pkgrel=1
arch=('any')
url="https://github.com/vinceliuice/Tela-icon-theme"
license=('GPL3')
source=("git+https://github.com/vinceliuice/Tela-icon-theme.git")
sha256sums=('SKIP')
options=('!strip')

pkgver() {
    cd "${srcdir}/${_gitname}"
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package() {
	cd "${srcdir}/${_gitname}"
	install -dm755 "${pkgdir}/"usr/share/icons
	sed -i '/gtk-update-icon-cache/d' install.sh
	./install.sh -d "${pkgdir}"/usr/share/icons
}
	
