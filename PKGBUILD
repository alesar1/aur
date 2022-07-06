# Maintainer: Tom Fryers <https://aur.archlinux.org/account/TomFryers>
# Contributor: Andrew Whatson <https://aur.archlinux.org/account/flatwhatson>
# Maintainer of emacs-git: Pedro A. López-Valencia <https://aur.archlinux.org/users/vorbote>

################################################################################
# The differences between this PKGBUILD and the one from `emacs-git` are:
# - The xwidgets webkit2gtk support is enabled.
# - Built-in packages are native compiled by default.
# - GPM and ALSA are enabled by default.
################################################################################

################################################################################
# CAVEAT LECTOR: This PKGBUILD is highly opinionated. I give you
#                enough rope to hang yourself, but by default it
#                only enables the features I use.
#
#        TLDR: yaourt users, cry me a river.
#
#        Everyone else: do not update blindly this PKGBUILD. At least
#        make sure to compare and understand the changes.
#
################################################################################

################################################################################
# Assign "YES" to the variable you want enabled; empty or any other value
# for NO.
#
# Where you read experimental, replace with foobar.
# =================================================
#
################################################################################
CHECK=            # Run tests. May fail, this is developement after all.

CLANG=            # Use clang.

GOLD=             # Use the gold linker.

LTO=              # Enable link-time optimization. Still experimental.

JIT="YES"         # Enable native just-in-time compilation. libgccjit is in AUR.
                  # This compiles only performance critical elisp files.
                  #
                  # To compile all elisp on demand, add
                  #    (setq comp-deferred-compilation t)
                  # to your .emacs file.

AOT="YES"         # Compile all elisp files.

CLI=              # CLI only binary.

GPM="YES"         # Mouse support in Linux console using gpmd.

NOTKIT=           # Use no toolkit widgets. Like B&W Twm (001d sk00l).
                  # Bitmap fonts only, 1337!

PGTK="YES"        # Use native GTK3 build. Supports Wayland, yay!

GTK3=             # GTK3 old windowing interface.

LUCID=            # Use the lucid, a.k.a athena, toolkit. Like XEmacs, sorta.
                  #
                  # Read https://wiki.archlinux.org/index.php/X_resources
                  # https://en.wikipedia.org/wiki/X_resources
                  # and https://www.emacswiki.org/emacs/XftGnuEmacs
                  # for some tips on using outline fonts with
                  # Xft, if you choose no toolkit or Lucid.

XI2="YES"         # Use Xinput2 support.
                  # https://www.x.org/releases/X11R7.7/doc/inputproto/XI2proto.txt

ALSA="YES"        # Linux sound support.

NOCAIRO=          # Disable here.

XWIDGETS="YES"    # Use GTK+ widgets pulled from webkit2gtk. Usable.

DOCS_HTML=        # Generate and install html documentation.

DOCS_PDF=         # Generate and install pdf documentation.

NOGZ="YES"        # Don't compress .el files.
################################################################################

################################################################################
if [[ $CLI == "YES" ]] ; then
  pkgname="emacs-pgtk-native-comp-nox-git"
else
  pkgname="emacs-pgtk-native-comp-git"
fi
pkgver=29.0.50.157962
pkgrel=1
pkgdesc="GNU Emacs. Development master branch."
arch=('x86_64')
url="http://www.gnu.org/software/emacs/"
license=('GPL3')
depends_nox=('gnutls' 'libxml2' 'jansson')
depends=("${depends_nox[@]}" 'harfbuzz')
makedepends=('git')
provides=('emacs')
replaces=('emacs')
#source=("emacs-git::git://git.savannah.gnu.org/emacs.git"
source=("emacs-git::git+https://github.com/emacs-mirror/emacs.git"
        "nemacs")
options=(!strip)
install=emacs-git.install
b2sums=('SKIP'
        '58e028b439d3c7cf03ea0be617b429a2c54e7aa1b8ca32b5ed489214daaa71e22c323de9662761ad2ce4de58e21dbe45ce6ce198f402686828574f8043d053d0')
################################################################################

################################################################################

if [[ $GOLD == "YES" && ! $CLANG == "YES" ]]; then
  export LD=/usr/bin/ld.gold
  export CFLAGS+=" -fuse-ld=gold";
  export CXXFLAGS+=" -fuse-ld=gold";
elif [[ $GOLD == "YES" && $CLANG == "YES" ]]; then
  echo "";
  echo "Clang rather uses its own linker.";
  echo "";
  exit 1;
fi

if [[ $CLANG == "YES" ]]; then
  export CC="/usr/bin/clang" ;
  export CXX="/usr/bin/clang++" ;
  export CPP="/usr/bin/clang -E" ;
  export LD="/usr/bin/lld" ;
  export AR="/usr/bin/llvm-ar" ;
  export AS="/usr/bin/llvm-as" ;
  export CCFLAGS+=' -fuse-ld=lld' ;
  export CXXFLAGS+=' -fuse-ld=lld' ;
  makedepends+=( 'clang' 'lld' 'llvm') ;
fi

if [[ $JIT == "YES" ]]; then
  if [[ $CLI == "YES" ]]; then
    depends_nox+=( 'libgccjit' );
  else
    depends+=( 'libgccjit' );
  fi
fi

if [[ ! $CLI == "YES" ]]; then
  depends+=( 'libxi' );
fi

if [[ $CLI == "YES" ]]; then
  depends=("${depends_nox[@]}");
elif [[ $NOTKIT == "YES" ]]; then
  depends+=( 'dbus' 'hicolor-icon-theme' 'libxinerama' 'libxrandr' 'lcms2' 'librsvg' 'libxfixes' 'libxi' 'libsm' 'xcb-util' 'libxcb' );
  makedepends+=( 'xorgproto' );
elif [[ $LUCID == "YES" ]]; then
  depends+=( 'dbus' 'hicolor-icon-theme' 'libxinerama' 'libxfixes' 'lcms2' 'librsvg' 'xaw3d' 'libxrandr' 'libxi' 'libsm' 'xcb-util' 'libxcb' );
  makedepends+=( 'xorgproto' );
elif [[ $GTK3 == "YES" ]]; then
  depends+=( 'gtk3' 'libsm' 'xcb-util' 'libxcb' );
  makedepends+=( 'xorgproto' 'libxi' );
elif [[ $PGTK == "YES" ]]; then
  depends+=( 'gtk3' 'libsm' 'xcb-util' 'libxcb' );
  makedepends+=( 'xorgproto' 'libxi' );
fi

if [[ ! $NOX == "YES" ]] && [[ ! $CLI == "YES" ]]; then
  depends+=( 'libjpeg-turbo' 'libpng' 'giflib' 'libwebp' 'libtiff' 'libxpm');
elif [[ $CLI == "YES" ]]; then
  depends+=();
fi

if [[ $ALSA == "YES" ]]; then
  if [[ $CLI == "YES" ]]; then
    depends_nox+=( 'alsa-lib' );
  else
    depends+=( 'alsa-lib' );
  fi
fi

if [[ ! $NOCAIRO == "YES" ]] && [[ ! $CLI == "YES" ]] && [[ ! $PGTK == "YES" ]] ; then
  depends+=( 'cairo' );
fi

if [[ $XWIDGETS == "YES" ]]; then
  if [[ $LUCID == "YES" ]] || [[ $NOTKIT == "YES" ]] || [[ $CLI == "YES" ]]; then
    echo "";
    echo "";
    echo "Xwidgets support **requires** GTK+3!!!";
    echo "";
    echo "";
    exit 1;
  else
    depends+=( 'webkit2gtk' );
  fi
fi

if [[ $GPM == "YES" ]]; then
  if [[ $CLI == "YES" ]]; then
    depends_nox+=( 'gpm' );
  else
    depends+=( 'gpm' );
  fi
fi

if [[ $DOCS_PDF == "YES" ]] && [[ ! -d '/usr/local/texlive' ]]; then
  makedepends+=( 'texlive-core' );
fi
################################################################################

################################################################################
pkgver() {
  cd "$srcdir/emacs-git"
  printf "%s.%s" \
    $(grep AC_INIT configure.ac | \
    awk -F',' '{ gsub("[ \\[\\]]","",$2); print $2 }') \
    $(git rev-list --count HEAD)
}

# There is no need to run autogen.sh after first checkout.
# Doing so, breaks incremental compilation.
prepare() {
  cd "$srcdir/emacs-git"
  [[ -x configure ]] || ( ./autogen.sh git && ./autogen.sh autoconf )
  mkdir -p "$srcdir/emacs-git/build"
}

if [[ $CHECK == "YES" ]]; then
check() {
  cd "$srcdir/emacs-git/build"
  make check
}
fi

build() {
  cd "$srcdir/emacs-git/build"

  local _conf=(
    --prefix=/usr
    --sysconfdir=/etc
    --libexecdir=/usr/lib
    --localstatedir=/var
    --mandir=/usr/share/man
    --with-gameuser=:games
    --with-modules
    --without-libotf
    --without-m17n-flt
# Beware https://debbugs.gnu.org/cgi/bugreport.cgi?bug=25228
# dconf and gconf break font settings you set in ~/.emacs.
# If you insist you'll need to read that bug report in *full*.
# Good luck!
   --without-gconf
  )

################################################################################

################################################################################

if [[ $CLANG == "YES" ]]; then
  _conf+=( '--enable-autodepend' );
fi

if [[ $LTO == "YES" ]]; then
  _conf+=( '--enable-link-time-optimization' );
fi

if [[ $JIT == "YES" ]]; then
  _conf+=( '--with-native-compilation' );
fi

if [[ $XI2 == "YES" ]]; then
  _conf+=( '--with-xinput2' );
fi

if [[ $CLI == "YES" ]]; then
  _conf+=( '--without-x' '--with-x-toolkit=no' '--without-xft' '--without-lcms2' '--without-rsvg' '--without-jpeg' '--without-gif' '--without-tiff' '--without-png' );
elif [[ $NOTKIT == "YES" ]]; then
  _conf+=( '--with-x-toolkit=no' '--without-toolkit-scroll-bars' '--without-xft' '--without-xaw3d' );
elif [[ $LUCID == "YES" ]]; then
  _conf+=( '--with-x-toolkit=lucid' '--with-xft' '--with-xaw3d' );
elif [[ $GTK3 == "YES" ]]; then
  _conf+=( '--with-x-toolkit=gtk3' '--without-xaw3d' );
elif [[ $PGTK == "YES" ]]; then
  _conf+=( '--with-pgtk' '--without-xaw3d' );
fi

if [[ ! $PGTK == "YES" ]]; then
    _conf+=( '--without-gsettings' ) :
fi

if [[ $NOCAIRO == "YES" || $CLI == "YES" || $NOTKIT == "YES" || $LUCID == "YES" ]]; then
  _conf+=( '--without-cairo' );
fi

if [[ $ALSA == "YES" ]]; then
    _conf+=( '--with-sound=alsa' );
else
    _conf+=( '--with-sound=no' );
fi

if [[ $XWIDGETS == "YES" ]]; then
  _conf+=( '--with-xwidgets' );
fi

if [[ $GPM == "YES" ]]; then
    true
else
  _conf+=( '--without-gpm' );
fi

if [[ $NOGZ == "YES" ]]; then
  _conf+=( '--without-compress-install' );
fi

# ctags/etags may be provided by other packages, e.g, universal-ctags
_conf+=('--program-transform-name=s/\([ec]tags\)/\1.emacs/')

################################################################################

################################################################################

  ../configure "${_conf[@]}"

  # Using "make" instead of "make bootstrap" enables incremental
  # compiling. Less time recompiling. Yay! But you may
  # need to use bootstrap sometimes to unbreak the build.
  # Just add it to the command line.
  #
  # Please note that incremental compilation implies that you
  # are reusing your src directory!
  #

  if [[ $JIT=="YES" ]] && [[ $AOT == "YES" ]]; then
    make NATIVE_FULL_AOT=1
  else
    make
  fi

  # You may need to run this if 'loaddefs.el' files become corrupt.
  #cd "$srcdir/emacs-git/lisp"
  #make autoloads
  #cd ../build

  # Optional documentation formats.
  if [[ $DOCS_HTML == "YES" ]]; then
    make html;
  fi
  if [[ $DOCS_PDF == "YES" ]]; then
    make pdf;
  fi

}

package() {
  cd "$srcdir/emacs-git/build"

  make DESTDIR="$pkgdir/" install

  install -D -m 755 "$srcdir"/nemacs "$pkgdir"/usr/bin/nemacs

  #if [[ ! $CLI == "YES" ]]; then

  # Install optional documentation formats
  if [[ $DOCS_HTML == "YES" ]]; then make DESTDIR="$pkgdir/" install-html; fi
  if [[ $DOCS_PDF == "YES" ]]; then make DESTDIR="$pkgdir/" install-pdf; fi

  # fix user/root permissions on usr/share files
  find "$pkgdir"/usr/share/emacs/ | xargs chown root:root

  # fix permssions on /var/games
  mkdir -p "$pkgdir"/var/games/emacs
  chmod 775 "$pkgdir"/var/games
  chmod 775 "$pkgdir"/var/games/emacs
  chown -R root:games "$pkgdir"/var/games

}

################################################################################
# vim:set ft=bash ts=2 sw=2 et:
