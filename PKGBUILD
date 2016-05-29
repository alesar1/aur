# Maintainer: Que Quotion ( quequotion at g mail dot com )
# Contributors: Det, Charles Bos, Xiao-Long Chen, Christopher Reimer, Que Quotion
# Based on gtk3 trunk: https://projects.archlinux.org/svntogit/packages.git/tree/trunk?h=packages/gtk3

pkgbase=gtk3-ubuntu-multilib
pkgname=({lib32-,}gtk3-ubuntu-multilib)
ubuntuver=3.18.9
pkgver=3.20.3
_debrel=1ubuntu3
pkgrel=5
pkgdesc="GObject-based multi-platform toolkit with Canonical patchset (multarch)"
depends=(adwaita-icon-theme gtk-update-icon-cache shared-mime-info)
arch=(i686 x86_64)
url="https://launchpad.net/ubuntu/+source/gtk+3.0/"
license=(LGPL)
source=(http://ftp.gnome.org/pub/gnome/sources/gtk+/${pkgver:0:4}/gtk+-$pkgver.tar.xz
        https://launchpad.net/ubuntu/+archive/primary/+files/gtk+3.0_$ubuntuver-$_debrel.debian.tar.xz
        settings.ini)
sha256sums=('3834f3bf23b260b3e5ebfea41102e2026a8af29e36c3620edf4a5cf05e82f694'
            '42ed3bb7e66394612a0eeb25e75004f80ad7bcb580b999f65025341406b00733'
            '14369dfd1d325c393e17c105d5d5cc5501663277bd4047ea04a50abb3cfbd119')

prepare() {
  cd "gtk+-$pkgver"

  # Apply Patches
  for i in $(grep -v '#' "$srcdir/debian/patches/series" | sort); do
    [[ "${i}" =~ ^# || -z "${i}" || "${i}" == *git* ]] && continue # Skip comments, newlines, and git patches
    [[ "${i}" == message-dialog-restore-traditional-look-on-unity.patch ]] && continue
    [[ "${i}" == uimanager-guard-against-nested-node-updates.patch ]] && continue
    [[ "${i}" == unity-border-radius.patch ]] && continue
    [[ "${i}" == unity-headerbar-maximized-mode.patch ]] && continue
    [[ "${i}" == x-canonical-accel.patch ]] && continue
    msg2 "Applying $i ..."
    patch -p1 -i "$srcdir/debian/patches/$i"
  done
}

build() {
  cd "gtk+-$pkgver"

  #Build native libraries
  [[ -d build-x86_64 ]] || mkdir build-x86_64
  pushd build-x86_64

  CXX=/bin/false ../autogen.sh --prefix=/usr \
      --sysconfdir=/etc \
      --localstatedir=/var \
      --enable-gtk2-dependency \
      --disable-schemas-compile \
      --enable-{x11,broadway,wayland}-backend 

  #https://bugzilla.gnome.org/show_bug.cgi?id=655517
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make
  popd

  #Build 32bit libraries
  [[ -d build-i686 ]] || mkdir build-i686
  pushd build-i686

  export CC='gcc -m32'
  export CXX='g++ -m32'
  export LDFLAGS+=' -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  
  export GTK_IM_MODULE_FILE='gtk.immodules-32'
  CXX=/bin/false ../autogen.sh --prefix=/usr \
      --sysconfdir=/etc \
      --localstatedir=/var \
      --enable-gtk2-dependency \
      --disable-schemas-compile \
      --enable-{x11,broadway,wayland}-backend \
      --lib{exec,}dir=/usr/lib32 \
      --build=i686-pc-linux-gnu 

  #https://bugzilla.gnome.org/show_bug.cgi?id=655517
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make
  popd
}

package_gtk3-ubuntu-multilib() {
  depends+=(glib2 atk cairo pango colord at-spi2-atk wayland 
lib{cups,x{cursor,inerama,randr,i,composite,damage,kbcommon,11,ext}})
  makedepends=(gobject-introspection python2)
  provides=(gtk{3{,-ubuntu},-update-icon-cache}=${pkgver})
  conflicts=(gtk{3{,-ubuntu},-update-icon-cache})
  install=gtk3-ubuntu.install
  cd "gtk+-$pkgver/build-x86_64"
  make DESTDIR="$pkgdir" install
  install -Dm644 ../../settings.ini "$pkgdir/usr/share/gtk-3.0/settings.ini"
}

package_lib32-gtk3-ubuntu-multilib() {
  pkgdesc+=" (32bit)"
  depends+=(lib32-{glib2,atk,cairo,pango,colord,at-spi2-atk,wayland,lib{cups,x{cursor,inerama,randr,i,composite,damage,kbcommon,11,ext}}})
  makedepends=(lib32-{gobject-introspection,python2} 'gcc-multilib')
  provides=(lib32-gtk{3{,-ubuntu},-update-icon-cache}=${pkgver})
  conflicts=(lib32-gtk{3{,-ubuntu},-update-icon-cache})
  install=lib32-gtk3-ubuntu.install
  cd "gtk+-$pkgver/build-i686"
  make DESTDIR="$pkgdir" install

  rm -rf "${pkgdir}"/{etc,usr/{share,include}} # needs bin/

  mv "${pkgdir}"/usr/bin/gtk-query-immodules-3.0{,-32}
  find "$pkgdir/usr/bin" -type f -not -name gtk-query-immodules-3.0-32 -delete
}
