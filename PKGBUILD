# Maintainer: Robosky <fangyuhao0612@gmail.com>

pkgbase=vimix-kde-git
_gitname=vimix-kde
pkgname=('vimix-kde-git' 'kvantum-theme-vimix-git')
pkgver=3.1d6476b
pkgrel=1
pkgdesc="Vimix kde is a flat Design theme for KDE Plasma desktop"
arch=('any')
url="https://github.com/vinceliuice/${_gitname}"
license=('GPL3')
options=('!strip')
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_gitname}"
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package_vimix-kde-git() {
	optdepends=('vimix-gtk-themes-git: Matching GTK theme'
				'kvantum-theme-vimix-git: Vimix theme for Kvantum'
				'vimix-icon-theme-git: Matching icon theme'
				'tela-icon-theme-git: Recommended icon theme')
	
	cd "${srcdir}/${_gitname}"
	install -d "${pkgdir}/"usr/share
	
	for _dir in plasma aurorae color-schemes ;
	do
		cp -r "${_dir}" "${pkgdir}/"usr/share ;
	done
}

package_kvantum-theme-vimix-git() {
	pkgdesc="Vimix theme for Kvantum"
	depends=('kvantum-qt5')
	
	cd "${srcdir}/${_gitname}"
	install -d "${pkgdir}/"usr/share
	
	cp -r Kvantum "${pkgdir}/"usr/share
}
	
