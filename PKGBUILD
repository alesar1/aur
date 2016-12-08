pkgname=batman-adv-dkms
pkgver=2016.4
pkgrel=3
pkgdesc='batman kernel module (dkms package)'
arch=('any')
url='https://www.open-mesh.org/projects/batman-adv'
license=('GPL')
source=(
	"batman-adv::git+https://git.open-mesh.org/batman-adv.git#commit=9890c9fdb5a8757a10d76bf2df8216c5051630df"
	'dkms.conf'
)
sha256sums=('SKIP'
            'af072d643fb0587c8a5af4c7faf0d9a9cb73f3515a3b79853c60d98a30743ab2')
depends=('dkms')

package() {
	install -dm755 "${pkgdir}/usr/src/${pkgbase}-${pkgver}/"

	cp -r "${srcdir}"/batman-adv/* "${pkgdir}/usr/src/${pkgbase}-${pkgver}/"

	install -Dm644 "${srcdir}/dkms.conf" "${pkgdir}/usr/src/${pkgbase}-${pkgver}/"
	sed -i "s/#MODULE_VERSION#/${pkgver}/" "${pkgdir}/usr/src/${pkgbase}-${pkgver}/dkms.conf"
}
