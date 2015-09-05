# Maintainer: Thiago Perrotta <perrotta dot thiago at poli dot ufrj dot br>
# Contributor: Ivan Petruk <localizator@ukr.net>
pkgname=super-flat-remix-icon-theme
_pkgname=Super-Flat-Remix
pkgver=1.08
pkgrel=1
pkgdesc='a pretty simple icon theme, derived from Ultra-Flat-Icons, Paper and Flattr'
arch=('any')
url='http://gnome-look.org/content/show.php/Super+flat+remix+icon+theme?content=169073'
license=('custom:cc-by-nc-sa-3.0')
depends=('xdg-utils')
options=(!strip !emptydirs)
install=${pkgname}.install
source=(
    "https://github.com/daniruiz/$_pkgname/archive/master.zip"
	"${pkgname}.install"
)
sha512sums=('c24e6c4af53690f69bf52d2d21eddd971a9aba13756190a3f107429a5a157656aabcb5a9eb52313f1c623fba41e1fe78bb7bca1fe3b3a1e90519652b8ff44aaa'
            '2e4eb809c4c58093f0d888d1cf632241128f6c8b19bed1c6b3e579e1cbfce66f5f179b6195c39fee49baa5824583f81ec97035d8db2daa91f98d220c06e44041')
package() {
    cd "${srcdir}/$_pkgname-master/"
    install -dm755 "${pkgdir}/usr/share/icons"
    ls "Super Flat Remix"
    rm -f "Super Flat Remix"/{CREDITS,LICENSE.txt}
    cp -a "Super Flat Remix" "${pkgdir}/usr/share/icons/$_pkgname"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
