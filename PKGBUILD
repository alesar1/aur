## Maintainer: AudioLinux  audiolinux@fastmail.fm

pkgname=hqplayer-embedded
_debpkgver=4.31.0-131
_debpkgverarm=4.31.0-131
pkgver=4.31.0
pkgrel=1
pkgdesc="Signalyst HQPlayer Embedded
 HQPlayer - the high-end upsampling multichannel software HD-audio player"
arch=('x86_64' 'aarch64')
url="http://www.signalyst.com/custom.html"
license=('custom')
depends=('alsa-lib' 'glibc' 'flac' 'gcc-libs' 'libgmpris' 'glib2' 'rygel' 'zip' 'unzip' 'wavpack' 'gupnp' 'openmp' 'mpg123' 'lame')
conflicts=('hqplayer-embedded-amd' 'hqplayer-embedded-rocm')
source=('hqplayerd.service'
        'hqplayerd_user.service'
        'sysusers.d'
        'tmpfiles.d'
        )
source_x86_64=("https://www.signalyst.eu/bins/hqplayerd/focal/hqplayerd_"$_debpkgver"_amd64.deb")
source_aarch64=("https://www.signalyst.eu/bins/hqplayerd/bullseye/hqplayerd_"$_debpkgverarm"_arm64.deb")
sha256sums=('d46242c40660ddf877eff89e2459a76fe5fbecb5621fd727aad742d69cbf96d1'
            '5d4194a704979b3ff92482e155769460906745a66e759142eba33a2226f9cb3a'
            '911b813c6d6b4b88daab7c28566136112f1217dce7f890902fd0f46a519c50fc'
            '353eb19a099092f1ee3b34b46a68e684b221003f221dc92e2c6e929311d0ff83')
sha256sums_x86_64=('b211c3259ecf350484dfa9fdcc3f57187695eeb26992f0f3e3ceeeffa79029e7')
sha256sums_aarch64=('72dd6327d143c59b8c3f8b62281d13a4777b18603ff5164ee73ca864cfd54974')
install=${pkgname}.install

package() {
  cd "$srcdir"
  bsdtar xf data.tar.xz -C "$pkgdir"
  install -Dm644 "$pkgdir/usr/share/doc/hqplayerd/copyright" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  rm "$pkgdir/usr/share/doc/hqplayerd/copyright"
  rm -rf "$pkgdir/lib"
  
  install -Dm644 "hqplayerd_user.service" "$pkgdir/usr/lib/systemd/user/hqplayerd.service"
  install -Dm644 "hqplayerd.service" "$pkgdir/usr/lib/systemd/system/hqplayerd.service"
  install -Dm644 tmpfiles.d             "${pkgdir}"/usr/lib/tmpfiles.d/hqplayer.conf
  install -Dm644 sysusers.d             "${pkgdir}"/usr/lib/sysusers.d/hqplayer.conf
  install -Dm644 "$pkgdir/etc/hqplayer/hqplayerd.xml" "$pkgdir/usr/share/doc/hqplayerd/hqplayerd.xml"

  rm -rf "$pkgdir/etc/modules-load.d"
  rm -rf "$pkgdir/etc/udev"
}
