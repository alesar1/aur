pkgname=vpncloud2
pkgver=2.0.1
pkgrel=3
pkgdesc='Peer-to-peer VPN'
arch=('x86_64')
url=""
license=('GPL')
depends=('libsystemd')
makedepends=('rust' 'cargo' 'git')
source=(git+https://github.com/dswd/vpncloud.rs.git#tag=v${pkgver}
        sysusers.conf
        dont_chown.patch)
noextract=()
sha256sums=('SKIP'
            'eb756f1f940838cfe35555ba9e8e07d0e7182a72ace03853256ec5b72b0e8fbf'
            '03b8e92bb3c9da005bac851ad531ec38624d4281b5afd57613a0fcd84c6d2ad8')
validpgpkeys=('6B5BBBCA2E3392315CC47434694A43B9C7FE6EA9')

prepare() {
        cd vpncloud.rs
        patch -p1 < ${srcdir}/dont_chown.patch
}

build() {
        cd vpncloud.rs

        # Build w/ release optimisations,
        cargo build --release
}

package() {
        cd vpncloud.rs
        
        install -d $pkgdir/etc/vpncloud
        install -m600 assets/example.net.disabled $pkgdir/etc/vpncloud/example.net.disabled

        install -D -m644 assets/vpncloud.1 $pkgdir/usr/share/man/man1/vpncloud.1
        install -D -m644 assets/vpncloud@.service $pkgdir/usr/lib/systemd/system/vpncloud@.service
        install -D -m755 target/release/vpncloud $pkgdir/usr/bin/vpncloud
        install -Dm0644 "${srcdir}/sysusers.conf" "${pkgdir}/usr/lib/sysusers.d/vpncloud.conf"
}
