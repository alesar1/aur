pkgname=screego-server-bin
_pkgname=server
pkgver=1.1.1
pkgrel=1
pkgdesc='screen sharing for developers'
arch=('x86_64' 'arm64')
url="https://github.com/screego/$_pkgname"
license=('GPL3')
provides=("screego-server")
conflict=("screego-server"
	"screego-server-git")
makedepends=('go' 'yarn')
optdepends=('nginx: to allow reverse proxy connections')
source_x86_64=("$pkgname-${pkgver}_amd64.tar.gz::$url/releases/download/v$pkgver/screego_${pkgver}_linux_amd64.tar.gz")
source_arm64=("$pkgname-${pkgver}_arm64.tar.gz::$url/releases/download/v$pkgver/screego_${pkgver}_linux_arm64.tar.gz")
source=(
	"screego-server.service"
	"tmpfiles.conf"
	"sysusers.conf"
	)
sha256sums=('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
            '1d4494d5328700b304b0837dafc7a5772b8abe3435a0a24337a89f25ad5acd1b'
            '5804e54e4af5704fd5066c45313d7635798bd4389cd8312ee965c911d9d75e85')
sha256sums_x86_64=('c60e28c1da76fd670507303786d68514ded211eb91062b3413b426f166ae2391')
sha256sums_arm64=('0aceeae3d7743bafaa6ecdfee2486e21fa91e9cbff7ab1dbad5dc69182f5d79f')

package() {
	mkdir -p "${pkgdir}/var/lib/screego-server/logs" \
		 "${pkgdir}/etc/screego/"
	install -m755 "${srcdir}/screego" \
		       "${pkgdir}/var/lib/screego-server/screego-server"
	install -m755 "${srcdir}/screego.config.example" \
		      "${pkgdir}/etc/screego/server.config"
	install -Dm644 "../screego-server.service" \
		       "$pkgdir/usr/lib/systemd/system/screego-server.service"
	install -Dm644 "../sysusers.conf" \
		       "$pkgdir/usr/lib/sysusers.d/screego-server.conf"
	install -Dm644 "../tmpfiles.conf" \
		       "$pkgdir/usr/lib/tmpfiles.d/screego-server.conf"
}
