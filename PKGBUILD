# Maintainer: Borislav Borisov <borislav.borisov@gmail.com>
# Contributor: 3ED_0 <krzysztof1987 at gmail>

pkgname=valentina-studio
pkgver=9.6.4
pkgrel=1
pkgdesc="Create, administer, query and explore Valentina DB, MySQL, MariaDB, PostgreSQL and SQLite databases for FREE."
arch=('x86_64')
url="http://www.valentina-db.com"
license=('custom')
makedepends=('')
source_x86_64=("${pkgname}-${pkgver}-${CARCH}.rpm::http://valentina-db.com/download/prev_releases/9.6.4/lin_64/vstudio_x64_9_lin.rpm")
sha256sums_x86_64=('80a39c7253f489c127f2ae01c4fcee9ac1860e9ef848aa7d1d4a80d6aa2bd711')

package() {
	install -d "${pkgdir}"/opt/VStudio
	install -d "${pkgdir}"/usr/share/applications
	install -d "${pkgdir}"/usr/share/doc/vstudio
	cp --preserve=mode -r "${srcdir}"/opt/VStudio/* "${pkgdir}"/opt/VStudio
	cp --preserve=mode -r "${srcdir}"/usr/share/applications/* "${pkgdir}"/usr/share/applications
	cp --preserve=mode -r "${srcdir}"/usr/share/doc/vstudio/* "${pkgdir}"/usr/share/doc/vstudio
}
