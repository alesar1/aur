# Maintainer: Jonas Witschel <diabonas at gmx dot de>
pkgname=tpm2-tss-engine-git
pkgver=r21.2be24c0
pkgrel=1
pkgdesc='OpenSSL engine for TPM2 devices'
arch=('x86_64')
url='https://github.com/tpm2-software/tpm2-tss-engine'
license=('BSD')
depends=('tpm2-tss' 'openssl')
makedepends=('git' 'autoconf-archive' 'pandoc')
checkdepends=('ibm-sw-tpm2' 'tpm2-tools-git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+$url.git")
sha512sums=('SKIP')
BUILDENV+=('!check') # see warning below before enabling tests

pkgver() {
	cd "${pkgname%-git}"
	printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${pkgname%-git}"
	autoreconf --install --force
}

build() {
	cd "${pkgname%-git}"
	./configure --prefix=/usr --sysconfdir=/etc
	make
}

# WARNING: currently tests are disabled by default because they use an available hardware TPM
# for some operations, see https://github.com/tpm2-software/tpm2-tss-engine#development-prefixes
# This would cause some tests to fail, so do not enable them on systems with a TPM
# or build in a clean chroot that does not have access to the device.
check() {
	cd "${pkgname%-git}"

	# Start TPM simulator
	tpm_server &
	tpm_server_pid="$!"
	tpm2_clear --tcti mssim

	# https://github.com/tpm2-software/tpm2-tss-engine/issues/41
	export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$PWD/.libs"

	make check

	kill "$tpm_server_pid" || true
}

package() {
	cd "${pkgname%-git}"
	make DESTDIR="$pkgdir" install
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
