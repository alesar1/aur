# Maintainer: Antonin Décimo <antonin dot decimo at gmail dot com>
# Contributor: AndyRTR <andyrtr@archlinux.org>

pkgname=xorg-xwayland-hidpi-git
pkgver=21.1.1.r0.gd4cc2e2db
pkgrel=1
arch=('x86_64')
license=('custom')
groups=('xorg')
url="https://xorg.freedesktop.org"
pkgdesc="Run X clients under Wayland, with HiDPI (git version)"
depends=('nettle' 'libegl' 'libepoxy' 'systemd-libs' 'libxfont2'
         'pixman' 'xorg-server-common')
makedepends=('meson' 'git'
             'xorgproto' 'xtrans'
             'pixman' 'libxkbfile' 'libxfont2' 'dbus'
             'xorg-font-util'
             'wayland' 'wayland-protocols'
             'libdrm' 'libepoxy'
             'systemd'
             'egl-wayland'
)
source=("xserver::git+https://gitlab.freedesktop.org/xorg/xserver.git"
       'xwlScaling.diff')
sha256sums=('SKIP'
            '3b5b20e8402948bca050d4d91d6733abfcc7e1a1644baa052f2c9196285c7667')
provides=('xorg-xwayland' 'xorg-server-xwayland' 'xorg-server-xwayland-git' 'xorg-server-xwayland-hidpi-git')
conflicts=('xorg-xwayland' 'xorg-server-xwayland' 'xorg-server-xwayland-git' 'xorg-server-xwayland-hidpi-git')
replaces=('xorg-server-xwayland-hidpi-git')

pkgver() {
  cd xserver
  { git stash; git checkout xwayland-21.1; } > /dev/null
  git describe --long | sed 's/^xwayland.//;s/\([^-]*-g\)/r\1/;s/-/./g'
  { git checkout master; git stash apply; } > /dev/null
}

prepare() {
  cd xserver
  patch --forward --strip=1 --input="${srcdir}/xwlScaling.diff"
}

build() {
  # Since pacman 5.0.2-2, hardened flags are now enabled in makepkg.conf
  # With them, module fail to load with undefined symbol.
  # See https://bugs.archlinux.org/task/55102 / https://bugs.archlinux.org/task/54845
#  export CFLAGS=${CFLAGS/-fno-plt}
#  export CXXFLAGS=${CXXFLAGS/-fno-plt}
#  export LDFLAGS=${LDFLAGS/,-z,now}

  arch-meson xserver build \
    -D os_vendor="Arch Linux" \
    -D ipv6=true \
    -D xvfb=false \
    -D xnest=false \
    -D xcsecurity=true \
    -D xorg=false \
    -D xephyr=false \
    -D xwayland=true \
    -D xwayland_eglstream=true \
    -D xwin=false \
    -D xquartz=false \
    -D glamor=true \
    -D udev=true \
    -D systemd_logind=true \
    -D suid_wrapper=true \
    -D xkb_dir=/usr/share/X11/xkb \
    -D xkb_output_dir=/var/lib/xkb

  # Print config
  meson configure build
  ninja -C build
}

package() {

  # bin + manpage + .pc file
  install -m755 -Dt "${pkgdir}"/usr/bin build/hw/xwayland/Xwayland
  install -m644 -Dt "${pkgdir}"/usr/share/man/man1 build/hw/xwayland/Xwayland.1
  install -m644 -Dt "${pkgdir}"/usr/lib/pkgconfig build/hw/xwayland/xwayland.pc

  # license
  install -m644 -Dt "${pkgdir}/usr/share/licenses/${pkgname}" xserver/COPYING
}

