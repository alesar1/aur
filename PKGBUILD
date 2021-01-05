# Maintainer: Manuel Coenen <manuel.coenen@gmail.com>
pkgname=duetruntime-bin
pkgver=3.2.0
pkgrel=1
pkgdesc=".NET Core runtime libraries for the Duet software framework"
arch=('armv7h' 'aarch64')
url="https://github.com/Duet3D/DuetSoftwareFramework.git"
license=('GPL3')
provides=("duetruntime=${pkgver}")
conflicts=('duetruntime')
depends=('curl' 'gettext' 'libunwind')
options=(!strip staticlibs)
source_armv7h=("https://pkg.duet3d.com/dists/stable/armv7/binary-armhf/duetruntime_${pkgver}_armhf.deb")
source_aarch64=("https://pkg.duet3d.com/dists/stable/armv7/binary-arm64/duetruntime_${pkgver}_arm64.deb")
md5sums_armv7h=('bf12fe23e6028696f3f1d8d68c79d477')
md5sums_aarch64=('c7270c62a1858ae1eb29bbb0bbcebead')
sha1sums_armv7h=('70069d97f36264dedeb630d28eea9b1af970fb1c')
sha1sums_aarch64=('662c96c3e4283d42ea60381d5c13f996b2df5a4a')
sha256sums_armv7h=('6933bf61a12cfbe345c0d597d022458b36f042c5726b4bce91c85e44b94eca0e')
sha256sums_aarch64=('0d655cc65071507f06709d0219e0cae4f0711c0f68e7d7446401cfde9d7f0d75')
sha512sums_armv7h=('27cec3f8dec55b7163b9a419f949e1087a4a783b013e9160ddecffc10ea8815018b149747b32a18a76401455dd3ae743b8c099bf3de8026af55a6c946ebe91e9')
sha512sums_aarch64=('08f3f5d565cfa08e496e66833fb0214b118431f00952eb8c68a46210164ada156149a0b1a3bec2229c8a14735b3ca806f952db34d2da829fe691c0462a90470a')

prepare() {
    tar -xf data.tar.xz
}

package() {
	install -dm 755 "${pkgdir}"/opt/dsf/bin
	install -m 644 "${srcdir}/opt/dsf/bin/"* "${pkgdir}/opt/dsf/bin"
}
