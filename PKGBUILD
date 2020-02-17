# Maintainer: Einhard Leichtfuß <alguien@respiranto.de>

_extname=LDAPAuthentication2
_extname_lowercase="${_extname,,}"
_pkgname_base="mediawiki-extension-${_extname_lowercase}"

pkgname="${_pkgname_base}-git"
pkgver=r62.0c39a55
pkgrel=2
pkgdesc="MediaWiki extension for LDAP authentication"
arch=('any')
url="https://www.mediawiki.org/wiki/Extension:${_extname}"
license=('GPL')
depends=('mediawiki'
         'mediawiki-extension-ldapprovider'
         'mediawiki-extension-pluggableauth')
makedepends=('git')
provides=("$_pkgname_base")
conflicts=("$_pkgname_base")
source=("git+https://gerrit.wikimedia.org/r/mediawiki/extensions/${_extname}")
sha512sums=('SKIP')

pkgver()
{
	cd "${_extname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package()
{
	local ext_dir="/usr/share/webapps/mediawiki/extensions/${_extname}"

	install -d -m755 "${pkgdir}${ext_dir}"
	cp -a "$_extname"/* "${pkgdir}${ext_dir}/"
}
