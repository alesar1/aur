# Maintainer: mehalter <micah at mehalter.com>

pkgname=astronvim
_pkgver=2.9.1
pkgver="v${_pkgver}"
pkgrel=1
pkgdesc="AstroNvim is an aesthetic and feature-rich neovim config that is extensible and easy to use with a great set of plugins"
arch=('any')
url="https://github.com/AstroNvim/AstroNvim"
license=('GPL3')
depends=("neovim>=0.8.0" "xclip")
source=("https://github.com/${pkgname}/${pkgname}/archive/refs/tags/${pkgver}.zip" "astronvim.vim.template")
sha256sums=(
	'2e40ce6cd4d3c3e2ee56d0c24f8ae3ef38eebb17390a01e49d0f0bb7af696c97'
	'a11c032b23e3892e9022aa32264cec022eddd25d39c874c36e70ed345ad05218'
)
conflicts=("${pkgname}")
provides=("${pkgname}")

package() {
	cd "$srcdir"
	install_dir="/usr/share/astronvim"
	echo -e "lua _G.astronvim_installation={home='${install_dir}', version='${_pkgver}', is_stable=true}\n$(cat astronvim.vim.template)" >astronvim.vim
	install -Dm 644 "astronvim.vim" "${pkgdir}/usr/share/nvim/runtime/plugin/astronvim.vim"
	cd "AstroNvim-${_pkgver}"
	install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	mkdir -p "${pkgdir}/usr/share/astronvim"
	cp -r {colors,init.lua,lua,packer_snapshot} "${pkgdir}/usr/share/astronvim"
}
