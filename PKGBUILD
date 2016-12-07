# Maintainer:  Bernhard Landauer <oberon@manjaro.org>
# Contributor: Morgan Cox <morgancoxuk@gmail.com>
# Contributor: AudioLinux <audiolinux AT fastmail DOT fm>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>

pkgname=nvidia-rt
pkgver=375.20
_extramodules=extramodules-4.8-rt
pkgrel=1
pkgdesc="NVIDIA drivers for linux-rt"
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
depends=('linux-rt>=4.8' 'linux-rt<4.5' "nvidia-utils=$pkgver" 'libgl')
makedepends=('linux-rt-headers>=4.8' 'linux-rt-headers<4.9')
license=('custom')
options=(!strip)
install=$pkgname.install
source_i686=("http://us.download.nvidia.com/XFree86/Linux-x86/$pkgver/NVIDIA-Linux-x86-$pkgver.run")
source_x86_64=("http://us.download.nvidia.com/XFree86/Linux-x86_64/$pkgver/NVIDIA-Linux-x86_64-$pkgver-no-compat32.run")
md5sums_i686=('b9bfa7f3f591418972e963b087ab91e3')
md5sums_x86_64=('88ac9b63a41ecd6b1214b04f44a61c79')

[[ "$CARCH" = "i686" ]] && _pkg="NVIDIA-Linux-x86-$pkgver"
[[ "$CARCH" = "x86_64" ]] && _pkg="NVIDIA-Linux-x86_64-$pkgver-no-compat32"

prepare() {
    sh "$_pkg.run" --extract-only
    cd "$_pkg"
}

build() {
    _kernver="$(cat /usr/lib/modules/$_extramodules/version)"
    cd "$_pkg"/kernel
    make SYSSRC=/usr/lib/modules/"$_kernver/build" module
}

package() {
    install -D -m644 "$srcdir/$_pkg/kernel/nvidia.ko" \
        "$pkgdir/usr/lib/modules/$_extramodules/nvidia.ko"
    install -D -m644 "$srcdir/$_pkg/kernel/nvidia-modeset.ko" \
         "$pkgdir/usr/lib/modules/$_extramodules/nvidia-modeset.ko"
    install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia-drm.ko" \
         "$pkgdir/usr/lib/modules/$_extramodules/nvidia-drm.ko"
    if [[ "$CARCH" = "x86_64" ]]; then
        install -D -m644 "$srcdir/$_pkg/kernel/nvidia-uvm.ko" \
            "$pkgdir/usr/lib/modules/$_extramodules/nvidia-uvm.ko"
    fi
    gzip "$pkgdir/usr/lib/modules/$_extramodules/"*.ko
    
    install -d -m755 "$pkgdir/usr/lib/modprobe.d"
    echo "blacklist nouveau" >> "$pkgdir/usr/lib/modprobe.d/_pkgname.conf"
}
