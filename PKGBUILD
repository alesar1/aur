# Maintainer: nl6720 <nl6720@archlinux.org>

pkgname=mediawiki-extension-codemirror
pkgver=1.37+r743+g50591927
pkgrel=1
_mw='1.37'
_commit='505919275fc90dfee046cb50fe945899adb682f1' # git rev-parse "REL${_mw/./_}"
pkgdesc='An extension for MediaWiki that provides syntax highlighting in the wikitext editor'
arch=('any')
url='https://www.mediawiki.org/wiki/Extension:CodeMirror'
license=('GPL')
makedepends=('git')
source=("git+https://gerrit.wikimedia.org/r/mediawiki/extensions/CodeMirror.git#commit=${_commit}")
sha512sums=('SKIP')

pkgver() {
	cd "${srcdir}/CodeMirror"
	printf '%s+r%s+g%s' "${_mw}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	install -d -m755 "${pkgdir}/usr/share/webapps/mediawiki/extensions"
	cp -r "${srcdir}/CodeMirror" "${pkgdir}/usr/share/webapps/mediawiki/extensions/"
}
