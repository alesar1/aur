# Maintainer: nl6720 <nl6720@archlinux.org>

pkgname=mediawiki-extension-usermerge
pkgver=REL1_36+r1026+g3992ef1
pkgrel=1
_mw='REL1_36'
_commit='3992ef110ace4e23a3076f8c9bc897fca7d6f133'
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
