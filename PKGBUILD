# Maintainer: nl6720 <nl6720@archlinux.org>

pkgname=mediawiki-extension-usermerge
pkgver=1.36+r1028+gf1dffed
pkgrel=1
_mw='1.36'
_commit='f1dffed0d5f46299d59eb85a9c3a0cae3de7feb5' # git rev-parse "REL${_mw/./_}"
pkgdesc="An extension for MediaWiki that allows to merge one Wiki user's account with another Wiki user's account"
arch=('any')
url='https://www.mediawiki.org/wiki/Extension:UserMerge'
license=('GPL')
makedepends=('git')
source=("git+https://gerrit.wikimedia.org/r/mediawiki/extensions/UserMerge.git#commit=${_commit}")
sha512sums=('SKIP')

pkgver() {
	cd "${srcdir}/UserMerge"
	printf '%s+r%s+g%s' "${_mw}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	install -d -m755 "${pkgdir}/usr/share/webapps/mediawiki/extensions"
	cp -r "${srcdir}/UserMerge" "${pkgdir}/usr/share/webapps/mediawiki/extensions/"
}
