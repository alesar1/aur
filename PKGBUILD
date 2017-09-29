# Maintainer: Pierre Franco <pierre dot franco at ensimag dot grenoble dash inp dot fr>
# Based on wine-staging PKGBUILD

#Additional patches:
# -Overwatch patches
# -Gallium Nine support
# -Keybind patch reversion
# -Heap allocation perfomance improvement patch
# -Wbemprox videocontroller query fix v2 (see https://bugs.winehq.org/show_bug.cgi?id=38879 )
# -Steam patch, Crossover Hack version (see https://bugs.winehq.org/show_bug.cgi?id=39403 )

pkgname=wine-gaming-nine
pkgver=2.17
pkgrel=3

_pkgbasever=${pkgver/rc/-rc}
_d3d9ver=$_pkgbasever
#_d3d9ver=2.16
_winesrcdir="wine-overwatch-overwatch-$_pkgbasever"

source=("https://github.com/gamax92/wine-overwatch/archive/overwatch-$_pkgbasever.tar.gz"
        "https://github.com/sarnex/wine-d3d9-patches/archive/wine-d3d9-$_d3d9ver.tar.gz"
	"https://github.com/laino/wine-patches/archive/master.tar.gz"
        30-win32-aliases.conf
        freetype_2.8.1_fix.patch
	keybindings.patch
        steam.patch
        wbemprox_query_v2.patch
        )
sha1sums=('1e2a147a74195f0ebbf35028b33a7dce3e26abf8'
          'f37e9190466faa67741b49b60e9268d70c5b4644'
	  'SKIP'
          '023a5c901c6a091c56e76b6a62d141d87cce9fdb'
	  'aabb80b412adc99fcc42b02fa2d6692321f1c3ac'
	  'f3febb8836f38320742a546c667106608d4c4395'
          '74aae040fde9ff3c9e8da9c840557e87afdbc3a0'
          '644e141125a9f2407e64d23c85ec84a691c7caae'
          )

pkgdesc="Based off wine-staging, including the gallium-nine patches and some more hacks"
url="http://www.wine-staging.com"
arch=(i686 x86_64)
options=(staticlibs)
license=(LGPL)

_depends=(
  attr             lib32-attr
  fontconfig       lib32-fontconfig
  lcms2            lib32-lcms2
  libxml2          lib32-libxml2
  libxcursor       lib32-libxcursor
  libxrandr        lib32-libxrandr
  libxdamage       lib32-libxdamage
  libxi            lib32-libxi
  gettext          lib32-gettext
  freetype2        lib32-freetype2
  glu              lib32-glu
  libsm            lib32-libsm
  gcc-libs         lib32-gcc-libs
  libpcap          lib32-libpcap
  lib32-libtxc_dxtn
  desktop-file-utils
)

makedepends=(autoconf ncurses bison perl fontforge flex
  'gcc>=4.5.0-2'   'gcc-multilib>=4.5.0-2'
  giflib                lib32-giflib
  libpng                lib32-libpng
  gnutls                lib32-gnutls
  libxinerama           lib32-libxinerama
  libxcomposite         lib32-libxcomposite
  libxmu                lib32-libxmu
  libxxf86vm            lib32-libxxf86vm
  libldap               lib32-libldap
  mpg123                lib32-mpg123
  openal                lib32-openal
  v4l-utils             lib32-v4l-utils
  alsa-lib              lib32-alsa-lib
  libxcomposite         lib32-libxcomposite
  mesa                  lib32-mesa
  mesa-libgl            lib32-mesa-libgl
  opencl-icd-loader     lib32-opencl-icd-loader
  libxslt               lib32-libxslt
  libpulse              lib32-libpulse
  libva                 lib32-libva
  gtk3                  lib32-gtk3
  gst-plugins-base-libs lib32-gst-plugins-base-libs
  samba
  opencl-headers
  dri2proto
  dri3proto
  xf86driproto
  pkg-config
  'freetype2<2.8.1-1'
)

optdepends=(
  giflib                lib32-giflib
  libpng                lib32-libpng
  libldap               lib32-libldap
  gnutls                lib32-gnutls
  mpg123                lib32-mpg123
  openal                lib32-openal
  v4l-utils             lib32-v4l-utils
  libpulse              lib32-libpulse
  alsa-plugins          lib32-alsa-plugins
  alsa-lib              lib32-alsa-lib
  libjpeg-turbo         lib32-libjpeg-turbo
  libxcomposite         lib32-libxcomposite
  libxinerama           lib32-libxinerama
  ncurses               lib32-ncurses
  opencl-icd-loader     lib32-opencl-icd-loader
  libxslt               lib32-libxslt
  libva                 lib32-libva
  gtk3                  lib32-gtk3
  gst-plugins-base-libs lib32-gst-plugins-base-libs
  vulkan-icd-loader     lib32-vulkan-icd-loader
  cups
  samba           dosbox
)

if [[ $CARCH == i686 ]]; then
    # Strip lib32 etc. on i686
    _depends=(${_depends[@]/*32-*/})
    makedepends=(${makedepends[@]/*32-*/} ${_depends[@]})
    makedepends=(${makedepends[@]/*-multilib*/})
    optdepends=(${optdepends[@]/*32-*/})
    provides=("wine=$pkgver")
    conflicts=('wine')
else
    makedepends=(${makedepends[@]} ${_depends[@]})
    provides=("wine=$pkgver" "wine-wow64=$pkgver" "wine-staging=$pkgver")
    conflicts=('wine' 'wine-wow64' 'wine-staging')
fi

prepare()
{
    cd "$_winesrcdir"

    patch -p1 < "$srcdir/wine-d3d9-patches-wine-d3d9-$_d3d9ver/staging-helper.patch" #for wine-staging
    patch -p1 < "$srcdir/wine-d3d9-patches-wine-d3d9-$_d3d9ver/wine-d3d9.patch"
    patch -p1 < ../steam.patch

#    patch -p1 -R < ../0001-ntdll-Improve-heap-allocation-performance-by-using-m.patch

#    patch -p1 < ../wine-patches-master/0001-ntdll-improve-heap-allocation-performance.patch
#    patch -p1 < ../wine-patches-master/0002-ntdll-heap.c-align-everything-to-64-byte-to-reduce-f.patch
    patch -p1 < ../wine-patches-master/0003-wine-list.h-linked-list-cache-line-prefetching.patch
#    patch -p1 < ../wine-patches-master/0004-ntdll-heap.c-freelist_balance-prefetch-next-entry-ca.patch
#   This patch has been upstreamed 
#    patch -p1 < ../wine-patches-master/0005-oleaut32-typelib.c-fix-cursor2-having-the-wrong-type.patch
#    patch -p1 < ../wine-patches-master/0006-Ensure-16-byte-alignment-of-data.patch
#    patch -p1 < ../wine-patches-master/0007-wined3d-use-SwitchToThread-waits-in-wined3d_pause.patch
    
    patch -p1 < ../wbemprox_query_v2.patch

    patch -p1 -R < ../keybindings.patch

    patch -p1 < ../freetype_2.8.1_fix.patch

    autoreconf -f

    sed 's|OpenCL/opencl.h|CL/opencl.h|g' -i configure*

    cd $srcdir

    # Get rid of old build dirs
    rm -rf $pkgname-{32,64}-build
    mkdir -p $pkgname-32-build
}

build()
{
    cd "$srcdir"

    if [[ $CARCH == x86_64 ]]; then
        msg2 "Building Wine-64..."

        mkdir -p $pkgname-64-build
        cd "$srcdir/$pkgname-64-build"
        ../$_winesrcdir/configure \
            --prefix=/usr \
            --libdir=/usr/lib \
            --with-x \
            --enable-win64 \
            --with-xattr \
            --disable-tests
        # Gstreamer was disabled for FS#33655

        make

        _wine32opts=(
        --libdir=/usr/lib32
        --with-wine64="$srcdir/$pkgname-64-build"
        )

        export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
    fi

    msg2 "Building Wine-32..."
    cd "$srcdir/$pkgname-32-build"
    ../$_winesrcdir/configure \
        --prefix=/usr \
        --with-x \
        --with-xattr \
        --disable-tests \
        "${_wine32opts[@]}"

    # These additional flags solve FS#23277
    make
}

package()
{
    depends=(${_depends[@]})

    msg2 "Packaging Wine-32..."
    cd "$srcdir/$pkgname-32-build"

    if [[ $CARCH == i686 ]]; then
        make prefix="$pkgdir/usr" install
    else
        make prefix="$pkgdir/usr" \
        libdir="$pkgdir/usr/lib32" \
        dlldir="$pkgdir/usr/lib32/wine" install

        msg2 "Packaging Wine-64..."
        cd "$srcdir/$pkgname-64-build"
        make prefix="$pkgdir/usr" \
        libdir="$pkgdir/usr/lib" \
        dlldir="$pkgdir/usr/lib/wine" install
    fi

    # Font aliasing settings for Win32 applications
    install -d "$pkgdir"/etc/fonts/conf.{avail,d}
    install -m644 "$srcdir/30-win32-aliases.conf" "$pkgdir/etc/fonts/conf.avail"
    ln -s ../conf.avail/30-win32-aliases.conf "$pkgdir/etc/fonts/conf.d/30-win32-aliases.conf"
}
