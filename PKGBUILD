# Maintainer: Michael Lass <bevan@bi-co.net>
# Contributor: Konstantin Gizdov <arch at kge dot pw>

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=openafs-modules-dkms
_srcname=openafs
pkgver=1.8.8
pkgrel=3
pkgdesc="Kernel module for OpenAFS (dkms)"
arch=('i686' 'x86_64' 'armv7h')
url="http://www.openafs.org"
license=('custom:"IBM Public License Version 1.0"')
depends=('dkms' 'libelf' 'openafs')
provides=("openafs-modules=$pkgver")
conflicts=('openafs-features-libafs' 'openafs-modules' 'openafs<1.6.6-2')
options=(!emptydirs)
source=("http://openafs.org/dl/openafs/${pkgver}/${_srcname}-${pkgver}-src.tar.bz2"
        "dkms.conf"
        "0001-LINUX-5.14-explicitly-set-set_page_dirty-to-default.patch"
        "0002-Linux-5.15-Convert-osi_Msg-macro-to-a-function.patch")
sha256sums=('daa8ef86a7727facfcde3bc97a6ad143129c1c25ee35f3347080ec7e9d284da0'
            '5ea5e184f9b44f5ed45817d2b5a10149d15c8c54f49e0b5b4b773652673cb9b0'
            '370a3588dc1c8f4d91fd8ea9cdea95b2754b42c0ddd8d074178fc2aa56be2748'
            'efe7804e0631990d125871cc8754d903681c8da53e6a83e5344bd68c93508ba0')

prepare() {
  cd "${srcdir}/${_srcname}-${pkgver}"

  # Fix compatibility with Linux 5.14
  # Fixes https://bugs.archlinux.org/task/72340
  # Source: https://gerrit.openafs.org/#/c/14826/1
  patch -p1 < "${srcdir}"/0001-LINUX-5.14-explicitly-set-set_page_dirty-to-default.patch

  # Prepare for Linux 5.15
  # Source: https://gerrit.openafs.org/#/c/14831/
  patch -p1 < "${srcdir}"/0002-Linux-5.15-Convert-osi_Msg-macro-to-a-function.patch

  # Only needed when changes to configure were made
  # ./regen.sh -q
}

build() {
  cd "${srcdir}/${_srcname}-${pkgver}"

  case "$CARCH" in
    "i686")    sysname=i386_linux26 ;;
    "x86_64")  sysname=amd64_linux26 ;;
    "armv7h")  sysname=arm_linux26 ;;
    *)         error "Unknown architecture '$CARCH'" && false
  esac

  ./configure --prefix=/usr \
              --sysconfdir=/etc \
              --sbindir=/usr/bin \
              --libexecdir=/usr/lib \
              --disable-fuse-client \
              --disable-kernel-module \
              --without-swig \
              --with-afs-sysname=$sysname

  make only_libafs_tree
}

package() {

  # install license
  install -Dm644 "${srcdir}/${_srcname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # install sources
  install -dm755 "${pkgdir}/usr/src/${_srcname}-${pkgver}"
  mv "${srcdir}/${_srcname}-${pkgver}/libafs_tree/"* "${pkgdir}/usr/src/${_srcname}-${pkgver}"
  sed "s/__VERSION__/$pkgver/" "${srcdir}/dkms.conf" > "${pkgdir}/usr/src/${_srcname}-${pkgver}/dkms.conf"

}
