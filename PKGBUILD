# Maintainer: Aurélien Ooms <aurelien.ooms@gmail.com>
pkgname=ovh-dns
pkgver=1.3.0
pkgrel=1
epoch=
pkgdesc="Update a given A/AAAA/... record in your DNS zone, using OVH API"
arch=(any)
url="https://github.com/aureooms/${pkgname}"
license=()
groups=()
depends=('bash' 'coreutils' 'iputils' 'jq' 'ovh-api-client')
makedepends=('git')
checkdepends=()
optdepends=('myip: ovh-dns-watch support' 'xxhash: ovh-dns-watch support')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=("https://github.com/aureooms/${pkgname}/archive/v${pkgver}.tar.gz")
noextract=()
md5sums=('SKIP')

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install
}
