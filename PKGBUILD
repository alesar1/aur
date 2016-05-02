# Maintainer: superlex

# Based on Parabola GNU/Linux-libre iceweasel PKGBUILD :

# Maintainer: André Silva <emulatorman@parabola.nu>
# Contributor: Márcio Silva <coadde@parabola.nu>
# Contributor (ConnochaetOS): Henry Jensen <hjensen@connochaetos.org>
# Contributor: Luke Shumaker <lukeshu@sbcglobal.net>
# Contributor: fauno <fauno@kiwwwi.com.ar>
# Contributor: vando <facundo@esdebian.org>
# Contributor (Arch): Jakub Schmidtke <sjakub@gmail.com>
# Contributor: Figue <ffigue at gmail>
# Contributor: taro-k <taro-k@movasense_com>
# Contributor: Michał Masłowski <mtjm@mtjm.eu>
# Thank you very much to the older contributors:
# Contributor: evr <evanroman at gmail>
# Contributor: Muhammad 'MJ' Jassim <UnbreakableMJ@gmail.com>

# Firefox PKGBUILD (Arch Linux) :

# Maintainer : Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

_pgo=false

# We're getting this from Debian Sid
_debname=firefox
_brandingver=45.0
_brandingrel=2
_debver=46.0
_debrel=1
_debrepo=http://ftp.debian.org/debian/pool/main/f
_parabolarepo=https://repo.parabola.nu/other/iceweasel

pkgname=iceweasel
pkgver=${_debver}.deb${_debrel}
pkgrel=1
pkgdesc="Debian Browser based on Mozilla Firefox, with Parabola GNU/Linux-libre branding"
arch=('i686' 'x86_64')
license=('GPL' 'MPL' 'LGPL')
depends=(alsa-lib dbus-glib desktop-file-utils ffmpeg gtk2 gtk3 hunspell icu libevent libvpx libxt mime-types mozilla-common nss sqlite startup-notification ttf-font)
makedepends=(autoconf2.13 diffutils gconf imake inetutils libidl2 libpulse librsvg-stable libxslt mesa pkg-config python2 quilt unzip yasm zip nss imagemagick)
options=(!emptydirs !makeflags debug)
if $_pgo; then
  makedepends+=(xorg-server-xvfb)
  options+=(!ccache)
fi
optdepends=('networkmanager: Location detection via available WiFi networks'
			'upower: Battery API'
			'ffmpeg: H264/AAC/MP3 decoding'
            'iceweasel-extension-archsearch: Iceweasel Arch search engines')
url="https://wiki.debian.org/it/Iceweasel"
provides=("$pkgname"="$_debver")
source=("${_debrepo}/${_debname}/${_debname}_${_debver}.orig.tar.xz"
		"${_debrepo}/${_debname}/${_debname}_${_debver}-${_debrel}.debian.tar.xz"
		"${_parabolarepo}/${pkgname}_${_brandingver}-${_brandingrel}.branding.tar.xz"
		mozconfig
		iceweasel.desktop
		iceweasel-install-dir.patch
		vendor.js
		no-libnotify.patch
		iceweasel-gtk3-20.patch
		enable-object-directory-paths.patch)
md5sums=('978831bfb5a8ae0e08c033f51bb3c09c'
         '96aca0023736939749e30c33b8e7c9aa'
         '18ddaa5f1b70cbf12110471d50746339'
         'c12060755cf7580e987144d5a4fea0df'
         '7b9e5996dd9fe0b186a43a297db1c6b5'
         '1c42509891cf6843660a5f3c69896e80'
         '35adf69c840aadeb138d1b0be3af63b5'
         'c4a7a21445579167bff3d787e887903e'
         '4398feb7543ef216a9f4a3690ea97180'
         'c1efa8d67e411ec0b23e6edbb69248b3')

prepare() {
  cd "$srcdir/$_debname-$_debver"
  mv "$srcdir/debian" .
  mv "$srcdir/$pkgname-$_brandingver/branding" debian
  mv "$srcdir/$pkgname-$_brandingver/patches/iceweasel-branding" debian/patches
  cat "$srcdir/$pkgname-$_brandingver/patches/series" >> debian/patches/series
  
  export QUILT_PATCHES=debian/patches
  export QUILT_REFRESH_ARGS='-p ab --no-timestamps --no-index'
  export QUILT_DIFF_ARGS='--no-timestamps'
  
  # We wont save user profile in .mozilla/iceweasel
  sed -i 's/MOZ_APP_PROFILE=mozilla\/firefox/MOZ_APP_PROFILE=mozilla\/iceweasel/g' "debian/branding/configure.sh"

  quilt push -av

  # Enable object directory paths for Iceweasel rebranding
  patch -Np1 -i "$srcdir/enable-object-directory-paths.patch"

  # Install to /usr/lib/$pkgname
  patch -Np1 -i "$srcdir/iceweasel-install-dir.patch"

  # https://bugzilla.mozilla.org/show_bug.cgi?id=1234158
  patch -Np1 -i "$srcdir/$pkgname-gtk3-20.patch"

  # Notifications with libnotify are broken
  # https://bugzilla.mozilla.org/show_bug.cgi?id=1236150
  patch -Np1 -i "$srcdir/no-libnotify.patch"

  # Load our build config
  cp "$srcdir/mozconfig" .mozconfig
  
  # Building optimization suggestions by Cyberpunk
  #echo 'ac_add_options --enable-optimize' >> .mozconfig
  #echo 'mk_add_options MOZ_MAKE_FLAGS="-j2"' >> .mozconfig

  mkdir "$srcdir/python2-path"
  ln -s /usr/bin/python2 "$srcdir/python2-path/python"
}


build() {
  cd "$srcdir/$_debname-$_debver"

  # _FORTIFY_SOURCE causes configure failures
  CPPFLAGS+=" -O2"

  export PATH="$srcdir/path:$PATH"

  if $_pgo; then
    # Do PGO
    xvfb-run -a -s "-extension GLX -screen 0 1280x1024x24" \
      make -f client.mk build MOZ_PGO=1
  else
    make -f client.mk build
  fi
}

package() {
  cd "$srcdir/$_debname-$_debver"
  make -f client.mk DESTDIR="$pkgdir" INSTALL_SDK= install

  install -Dm644 ../vendor.js "$pkgdir/usr/lib/$pkgname/browser/defaults/preferences/vendor.js"

  _brandingdir=debian/branding
  brandingdir=moz-objdir/$_brandingdir
  icondir="$pkgdir/usr/share/icons/hicolor"
  for i in 16 22 24 32 48 64 128 192 256 384; do
    rsvg-convert -w $i -h $i "$_brandingdir/${pkgname}_icon.svg" -o "$brandingdir/default$i.png"
    install -Dm644 "$brandingdir/default$i.png" "$icondir/${i}x${i}/apps/$pkgname.png"
  done

  install -Dm644 "$_brandingdir/${pkgname}_icon.svg" "$icondir/scalable/apps/$pkgname.svg"
 
  install -d "$pkgdir/usr/share/applications"
  install -m644  "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications"
  
  
  # Use system-provided dictionaries
  rm -rf "$pkgdir/usr/lib/$pkgname/"{dictionaries,hyphenation}
  ln -sf /usr/share/hunspell            "$pkgdir/usr/lib/$pkgname/dictionaries"
  ln -sf /usr/share/hyphen              "$pkgdir/usr/lib/$pkgname/hyphenation"
    
  
  # We don't want the development stuff
  rm -rf "$pkgdir"/usr/{include,lib/$pkgname-devel,share/idl}

  # Replace duplicate binary with symlink
  ln -sf $pkgname "$pkgdir/usr/lib/$pkgname/$pkgname-bin"
  
    
  # Add Debian searchplugin
  #install -Dm644 "$srcdir/$_debname-$_debver/debian/debsearch.xml" "${pkgdir}/usr/lib/firefox/distribution/searchplugins/common/"
}
