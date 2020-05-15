# Maintainer: graysky <graysky AT archlinux DOT us>
 
pkgname=distccd-x86_64
arch=(armv7h aarch64)
_date=20200514
# inspect source tarball under $name/share/gcc-x.y.z
pkgver=10.1.0.$_date
pkgrel=1
license=('GPL' )
url="https://github.com/graysky2/crosstool-ng_for_distcc"
pkgdesc="Toolchain for x86_64 builds on Arch ARM volunteers via distcc"
depends=('distcc')
options=('libtool' 'emptydirs' '!strip')
source_armv7h=("http://repo-ck.com/PKG_source/x-tools86-armv7h-$_date.tar.zst"{,.sig})
source_aarch64=("http://repo-ck.com/PKG_source/x-tools86-aarch64-$_date.tar.zst"{,.sig})
source=(distccd-x86_64.{service,config})
noextract=("x-tools86-armv7h-$_date.tar.zst"
"x-tools86-aarch64-$_date.tar.zst")
backup=(etc/conf.d/distccd-x86_64)
install=readme.install
validpgpkeys=(
'4E22BB637E26407D5DEE550988A032865EE46C4C' # graysky
)
sha256sums=('23e791054de2b2599699482fdd880066c9d03758f9e38eb4634dc571cb90959e'
            'ea406b82e10b7084192d0a480ec24ee889a6a592ea3e339dc81cf3a6f1058bf9')
sha256sums_armv7h=('0e51e1cc45f2db002b4a50bd402848780dbf86719cc3204a7679d85540885e29'
                   'SKIP')
sha256sums_aarch64=('df626a7d828ff99e4a537a484145a992a29dbf60f02e232e1448be36818b3b26'
                    'SKIP')

package() {
  # install symlink to distccd
  install -d "${pkgdir}/usr/bin"
  ln -sf /usr/bin/distccd "${pkgdir}/usr/bin/distccd-x86_64"

  # install whitelist for toolchain new for v3.3
  install -d "${pkgdir}/usr/lib/distcc"

  _targets=(c++ cc clang clang++ cpp g++ gcc)
  for bin in "${_targets[@]}"; do
    ln -sf /usr/bin/distcc "${pkgdir}/usr/lib/distcc/x86_64-pc-linux-gnu-$bin"
  done

  # install service and config
  install -Dm644 "${srcdir}/distccd-x86_64.service" \
    "${pkgdir}/usr/lib/systemd/system/distccd-x86_64.service"
  install -Dm644 "${srcdir}/distccd-x86_64.config" \
    "${pkgdir}/etc/conf.d/distccd-x86_64"

  # copy in toolchain
  install -d "${pkgdir}/opt"
  bsdtar -x --uid 0 --gid 0 -f "${srcdir}/x-tools86-$CARCH-$_date.tar.zst" -C "${pkgdir}/opt/"
}

