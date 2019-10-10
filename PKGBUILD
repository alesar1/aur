# Maintainer: Markus Richter <mqus at disroot dot org>

pkgname=bitwarden_rs-git
_pkgbase=bitwarden_rs
pkgver=1.11.0.r8.g0586c00
pkgrel=1
pkgdesc="An unofficial lightweight implementation of the bitwarden-server using rust and sqlite. Does NOT include the web-interface."
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/dani-garcia/bitwarden_rs"
license=('GPL3')
depends=('openssl')
makedepends=('rust-nightly' 'cargo-nightly')
provides=("$_pkgbase") 
optdepends=("bitwarden_rs-vault: Web Interface 'Vault'")
conflicts=("${_pkgbase}" "${_pkgbase}-mysql" "${_pkgbase}-postgresql")
backup=('etc/bitwarden_rs.env')
install=bitwarden_rs.install
source=('git+https://github.com/dani-garcia/bitwarden_rs.git'
	"${_pkgbase}.install"
	"${_pkgbase}.service"
	"0001-Disable-Vault.patch")
source_armv7h=("0002-Rollback-ARM-Toolchain.patch")
sha512sums=('SKIP'
            '399e63002acb764895bbcf3b983642c8858343b36909eeeb73133de1a9740a3d81232bc206ff6bf3daed50f72354c5e6fd5314d0d044acd9f1cb23a933b1dd74'
            '4ce188956f6fe7cfdb711b1505f6344ed2775751ea112a0506dc96455c2705ab8529ec442e4747d7810fc3535b4ca78d1864e874dab5b5306373587097e02658'
            'a6f2361c7aa83e63b9a557500406b0cd660e0d7f8b16345f859faa3f96e22bdcecd7589711960486fa0401896291f7d46f66882744c69117fc146056f4a49028')
sha512sums_armv7h=('f26044402b04cc8494cf97b8592ad792bdda875f13598028f020757f8b79bce03059fabf11c80f78bec392f45ab713e861711026881b152df4fb2dcf675e8247')


pkgver() {
	cd "$srcdir/$_pkgbase"
	( set -o pipefail
	    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
	    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	#build bitwarden_rs
	cd "$srcdir/$_pkgbase"
	patch -N -p1 -i "$srcdir/0001-Disable-Vault.patch"

	# Check if the build is on armv7h
	if [ -e "$srcdir/0002-Rollback-ARM-Toolchain.patch" ] ;then
		# workaround for armv7h bug: https://github.com/rust-lang/rust/issues/62896
		echo "nightly-2019-05-11" > rust-toolchain
	fi

	cargo build --release --features sqlite
}

package() {
	# setup systemd service
	install -D -m 0644 "$srcdir/bitwarden_rs.service" "$pkgdir/usr/lib/systemd/system/bitwarden_rs.service"
	# copy default config file
	install -D -m 0644 "$srcdir/$_pkgbase/.env.template" "$pkgdir/etc/bitwarden_rs.env"
	# copy binary
	install -D -m0755 "$srcdir/$_pkgbase/target/release/bitwarden_rs" "$pkgdir/usr/bin/bitwarden_rs"
}
