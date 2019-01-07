# Maintainer: Jonas Witschel <diabonas at gmx dot de>
pkgname=tpm2-totp-git
pkgver=r8.f9822b9
pkgrel=2
pkgdesc='Attest the trustworthiness of a device against a human using time-based one-time passwords'
arch=('x86_64')
url='https://github.com/AndreasFuchsSIT/tpm2-totp'
license=('BSD')
depends=('qrencode' 'tpm2-tss')
makedepends=('git' 'autoconf-archive' 'oath-toolkit' 'pandoc')
checkdepends=('ibm-sw-tpm2' 'psmisc' 'tpm2-tools-git')
optdepends=('mkinitcpio: hook to display the TOTP during boot')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+$url.git"
        'initcpio_install_tpm2-totp'
        'initcpio_hooks_tpm2-totp')
sha512sums=('SKIP'
            '33738cb9d30d6ad338b6cf6bca538ba4f9b49b9ae799626efc7462bb2a31e386cd04d8298e8c2e3743f4c212866e864332869e4393871f22360edc2567fad163'
            'ebce4c738012dbcb82513b1f8148ee17deb088f80fa4f365d1b5f34b9c57f28b1995b4e6d04e003fd2ef6ed3393fb0c4496d182b02a7f5b2609b2ed4a160dac1')
BUILDENV+=('!check') # see warning below before enabling tests

pkgver() {
	cd "${pkgname%-git}"
	printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${pkgname%-git}"
	sed --in-place 's|@CODE_COVERAGE_RULES@|include $(top_srcdir)/aminclude_static.am|' Makefile.am
	autoreconf --install --force
}

build() {
	cd "${pkgname%-git}"
	./configure --prefix=/usr
	make
}

# WARNING: currently tests are disabled by default because they use an available hardware TPM.
# This should generally be safe, but the tests might fail if your TPM does not support all
# cryptographic algorithms used by the test suite and some data might get left behind in the
# TPM's storage (NVRAM). Familiarise yourself with the documentation before enabling tests
# or build in a clean chroot that does not have access to the physical TPM device.
check() {
	cd "${pkgname%-git}"
	make --jobs=1 check
}

package() {
	cd "${pkgname%-git}"
	make DESTDIR="$pkgdir" install
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 "$srcdir/initcpio_install_tpm2-totp" "$pkgdir/usr/lib/initcpio/install/tpm2-totp"
	install -Dm644 "$srcdir/initcpio_hooks_tpm2-totp" "$pkgdir/usr/lib/initcpio/hooks/tpm2-totp"
}
