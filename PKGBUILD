# Maintainer: superlex

# Based on Parabola GNU/Linux iceweasel-libre PKGBUILD :

# Contributor (ConnochaetOS): Henry Jensen <hjensen@connochaetos.org>
# Contributor (Parabola): Luke Shumaker <lukeshu@sbcglobal.net>
# Contributor: Figue <ffigue at gmail>
# Contributor (Parabola): fauno <fauno@kiwwwi.com.ar>
# Contributor (Parabola): vando <facundo@esdebian.org>
# Contributor (Parabola): André Silva <emulatorman@lavabit.com>
# Contributor (Parabola): Márcio Silva <coadde@lavabit.com>
# Contributor (Arch): Jakub Schmidtke <sjakub@gmail.com>
# Thank you very much to the older contributors:
# Contributor: evr <evanroman at gmail>
# Contributor: Muhammad 'MJ' Jassim <UnbreakableMJ@gmail.com> 

# Firefox PKGBUILD (Arch Linux):

# Maintainer : Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

_pgo=false

# We're getting this from Debian Sid
_debname=iceweasel
_debver=44.0
_debrel=1
_debrepo=http://ftp.debian.org/debian/pool/main/i/

pkgname=iceweasel
pkgver=$_debver.deb$_debrel
pkgrel=1
pkgdesc="Debian Browser based on Mozilla Firefox"
arch=('i686' 'x86_64')
license=('GPL' 'MPL' 'LGPL')
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types' 'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme' 'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake' 'libpulse' 'inetutils' 'quilt' 'pkg-config' 'nss>=3.18.1' 'libidl2'  'librsvg' 'libxslt' 'autoconf2.13' 'imagemagick' 'gconf')

options=(!emptydirs !makeflags debug)
if $_pgo; then
  makedepends+=(xorg-server-xvfb)
  options+=(!ccache)
fi

optdepends=('networkmanager: Location detection via available WiFi networks'
			'upower: Battery API'
			'ffmpeg: H264/AAC/MP3 decoding'
            'iceweasel-extension-archsearch: Iceweasel Arch search engines'
            'iceweasel-extension-archforumsearch-it: Iceweasel search engines for Arch Linux Italian forum')
url="https://packages.debian.org/source/sid/iceweasel"
install=iceweasel.install
provides=("$_debname"="$_debver")
source=("${_debrepo}/${_debname}/${_debname}_${_debver}.orig.tar.xz"
		"${_debrepo}/${_debname}/${_debname}_${_debver}-${_debrel}.debian.tar.xz"
        'mozconfig'
        'iceweasel.desktop'
        'iceweasel-install-dir.patch'
        'vendor.js'
		'iceweasel-fixed-loading-icon.png')
md5sums=('cca619497c1c7e1a255a463d0fc75fb0'
         '20cc51d6550e03f15d797689762711b9'
         '329ae0844819b6baac61d9a5749a6005'
         '7b9e5996dd9fe0b186a43a297db1c6b5'
         '1c42509891cf6843660a5f3c69896e80'
         '35adf69c840aadeb138d1b0be3af63b5'
         '6e335a517c68488941340ee1c23f97b0')

prepare() {
  export DEBIAN_BUILD="firefox-$_debver"
  
  export QUILT_PATCHES=debian/patches
  export QUILT_REFRESH_ARGS='-p ab --no-timestamps --no-index'
  export QUILT_DIFF_ARGS='--no-timestamps'
  
  mv debian "$srcdir/$DEBIAN_BUILD/"
  cd "$srcdir/$DEBIAN_BUILD"
  
  # We wont save user profile in .mozilla/iceweasel
  sed -i 's/MOZ_APP_PROFILE=mozilla\/firefox/MOZ_APP_PROFILE=mozilla\/iceweasel/g' "debian/branding/configure.sh"

  quilt push -av

  # Install to /usr/lib/$pkgname
  patch -Np1 -i "$srcdir/iceweasel-install-dir.patch"

  # Load our build config
  cp "$srcdir/mozconfig" .mozconfig
  
  # Building optimization suggestions by Cyberpunk
  #echo 'ac_add_options --enable-optimize' >> .mozconfig
  #echo 'mk_add_options MOZ_MAKE_FLAGS="-j2"' >> .mozconfig

  mkdir "$srcdir/python2-path"

  # WebRTC build tries to execute "python" and expects Python 2
  ln -s /usr/bin/python2 "$srcdir/python2-path/python"

  # configure script misdetects the preprocessor without an optimization level
  # https://bugs.archlinux.org/task/34644
  sed -i '/ac_cpp=/s/$CPPFLAGS/& -O2/' configure

  # Fix tab loading icon (flickers with libpng 1.6)
  # https://bugzilla.mozilla.org/show_bug.cgi?id=841734
  cp "$srcdir/iceweasel-fixed-loading-icon.png" browser/themes/linux/tabbrowser/loading.png

}

build() {
  export DEBIAN_BUILD="firefox-$_debver"
  
  cd "$srcdir/$DEBIAN_BUILD"

  export PATH="$srcdir/python2-path:$PATH"
  export PYTHON="/usr/bin/python2"

  if $_pgo; then
    xvfb-run -a -s "-extension GLX -screen 0 1280x1024x24" \
    make -f client.mk build MOZ_PGO=1
  else
    make -f client.mk build
  fi
}

package() {
  export DEBIAN_BUILD="firefox-$_debver"

  cd "$srcdir/$DEBIAN_BUILD"
  make -f client.mk DESTDIR="$pkgdir" INSTALL_SDK= install

  install -Dm644 ../vendor.js "$pkgdir/usr/lib/$pkgname/browser/defaults/preferences/vendor.js"

  _brandingdir=debian/branding
  brandingdir=moz-objdir/$_brandingdir
  icondir="$pkgdir/usr/share/icons/hicolor"
  for i in 16 22 24 32 48 64 128 192 256 384; do
    convert -background none "$_brandingdir/${pkgname}_icon.svg" \
      -resize ${i}x${i}^ -gravity center -extent ${i}x${i} \
      "$brandingdir/default$i.png"
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

  # Workaround for now: https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf $pkgname "$pkgdir/usr/lib/$pkgname/$pkgname-bin"


  # Remove $srcdir refers
  sed -i '1d' "$pkgdir/usr/lib/$pkgname/defaults/pref/channel-prefs.js"
  
    
  # Searchplugins section
  
  # According to debian choices, we prefer to use /etc/icewasel/searchplugins
  install -d "$pkgdir/etc/${pkgname}/searchplugins/common"
  
  # Add common web searchplugins
  # install -Dm644 "$srcdir/$DEBIAN_BUILD/debian/duckduckgo.xml" "$pkgdir/etc/${pkgname}/searchplugins/common/duckduckgo.xml"
  install -Dm644 "$srcdir/$DEBIAN_BUILD/debian/debsearch.xml" "$pkgdir/etc/${pkgname}/searchplugins/common/debsearch.xml"
  
  # Add web searchplugins for default locale (en-US)
  # WORNING!! It seems they aren't included anymore
  # install -d "$pkgdir/etc/${pkgname}/searchplugins/locale"
  # cp -R "$pkgdir/usr/lib/$pkgname/browser/searchplugins" "$pkgdir/etc/${pkgname}/searchplugins/locale/en-US"
  # rm -rv "$pkgdir/usr/lib/$pkgname/browser/searchplugins"    
}

