# Maintainer: Ronald Record <github@ronrecord.com>
# Contributor: Karl Stavestrand <karl@stavestrand.no>
# Contributor: Adrian Kowalski <adpkow@gmail.com>
# Contributor: Alexander Lopatin <sbar.geek@gmail.com>
# Contributor: Alexey Semenko <igogo.dev@gmail.com>
# Contributor: Andreas Rammhold <andreas@rammhold.de>
# Contributor: Andrzej Rybczak <andrzej@rybczak.net>
# Contributor: Anton Simakov <ttohin@gmail.com>
# Contributor: Arnaud Guignard <aguignard@gmail.com>
# Contributor: Asa Sourdiffe <asourdiffe@gmail.com>
# Contributor: Benoît Dardenne <benoit.dardenne@gmail.com>
# Contributor: Benoit Pierre <benoit.pierre@gmail.com>
# Contributor: brezerk <brezerk@gmail.com>
# Contributor: Chris Gregory <czipperz@gmail.com>
# Contributor: Czipperz <czipperz@gmail.com>
# Contributor: Damien Leone <damien.leone@fensalir.fr>
# Contributor: Daniel <quite@hack.org>
# Contributor: Darby Payne <darby.payne@gmail.com>
# Contributor: David Coppa <dcoppa@gmail.com>
# Contributor: Dmitriy Kusterskiy <dimykus@gmail.com>
# Contributor: Eric Izoita <ericizoita@gmail.com>
# Contributor: Frank Blendinger <fb@intoxicatedmind.net>
# Contributor: greenbagels <greenbagels@teknik.io>
# Contributor: Hamuko <hamuko@burakku.com>
# Contributor: Hugh Wang <hghwng@gmail.com>
# Contributor: Jacek Sowiński <mruwek.fs@vcf.pl>
# Contributor: James Pike <jpike@chilon.net>
# Contributor: Jan Palus <jan.palus@gmail.com>
# Contributor: Jesse Kleve <jesse.kleve@gmail.com>
# Contributor: jgr <jgr006@gmail.com>
# Contributor: John Fresco <john.fresco@utah.edu>
# Contributor: Larson Carter <larsoncarter@blazermail.net>
# Contributor: Lennart Braun <lenerd@posteo.de>
# Contributor: Maarten de Vries <maarten@de-vri.es>
# Contributor: Marc Jessome <marc.jessome@gmail.com>
# Contributor: Matthew Hague <matthewhague@zoho.com>
# Contributor: Max Kellermann <max@duempel.org>
# Contributor: Michaël Cadilhac <michael@cadilhac.name>
# Contributor: Moritz Lipp <mlq@pwmt.org>
# Contributor: Needs <needs@mailoo.org>
# Contributor: Pawel Tomak <pawel.tomak@gmail.com>
# Contributor: Qball Cow <qball@QDesk.site>
# Contributor: Raghavendra D Prabhu <rprabhu@wnohang.net>
# Contributor: Sam Simmons <sam@samiconductor.com>
# Contributor: Sebastian Peters <koelnconcert@googlemail.com>
# Contributor: sphaugh <sean.haugh@emerson.com>
# Contributor: Trygve Aaberge <trygveaa@gmail.com>
# Contributor: Wieland Hoffmann <themineo@gmail.com>
# Contributor: Wojciech Siewierski <wojciech.siewierski@onet.pl>
# Contributor: Yannick LM <yannicklm1337@gmail.com>
# Contributor: V <v@anomalous.eu>
# Contributor: Nicolas Wack <wackou@gmail.com>
# Contributor: Dmitry Bogdanov <dmitry.bogdanov@upf.edu>
# Contributor: Oscar Mayor <oscar.mayor@upf.edu>
# Contributor: Sankalp Gulati <sankalp.gulati@upf.edu>

pkgname=musicplayerplus
pkgver=2.0.1
pkgrel=2
pkgdesc="Character based MPD client, spectrum visualizer, Beets library management, Mopidy and Navidrome servers, plus more"
arch=('x86_64' 'armv7h')
url="https://github.com/doctorfree/MusicPlayerPlus"
license=('MIT')
depends=(util-linux boost-libs libcurl-compat libmpdclient ncurses readline taglib mpd ffmpeg4.4 inotify-tools figlet tmux fzf mpc python python-pip python-numpy python-six mplayer eigen fftw clang libsamplerate chromaprint iniparser libyaml swig alsa-lib libpulse sndio sqlite qt5-base wmctrl xorg-xrandr yt-dlp)
makedepends=(boost cargo git pandoc qt5-tools zip)
optdepends=('cool-retro-term: cool retro terminal emulator')
install=musicplayerplus.install
source=("${pkgname}::git+https://github.com/doctorfree/MusicPlayerPlus.git#tag=v${pkgver}r${pkgrel}")
sha256sums=('SKIP')
options=(strip docs !libtool !staticlibs emptydirs zipman purge !debug !lto)

export RUSTUP_TOOLCHAIN=stable
export CARGO_TARGET_DIR=target

prepare() {
  cd "${srcdir}/${pkgname}"
  for rustproj in bliss-analyze blissify
  do
    git clone https://github.com/doctorfree/${rustproj}
    cd ${rustproj}
    cargo fetch --locked --target "${CARCH}-unknown-linux-gnu"
    cd ..
  done
  [ -f /usr/include/gaia2/gaia.h ] && [ -f /usr/lib/libgaia2.a ] || {
    # Need to install Gaia, an Essentia build dependency
    PROJ=gaia
    prefix="--prefix=/usr"

    [ -d ${PROJ} ] && rm -rf ${PROJ}
    git clone https://github.com/MTG/gaia.git

    cd ${PROJ}
    git switch qt5

    # Prior to configure, determine architecture and set CXXFLAGS
    arch=`uname -m`
    [ "${arch}" == "armv7l" ] && {
      # Remove -msse2 from CXXFLAGS
      cat wscript | sed -e "s/'-O2', '-msse2'/'-O2'/" > /tmp/wsc$$
      cp /tmp/wsc$$ wscript
      rm -f /tmp/wsc$$
    }

    ./waf configure ${prefix} --with-python-bindings --with-asserts
    ./waf
    sudo ./waf install
  }
}

build() {
  cd "${srcdir}/${pkgname}"
  # Build mpcplus
  if [ -x scripts/build-mpcplus.sh ]
  then
    scripts/build-mpcplus.sh -v
  else
    cd mpcplus
    make clean
    make distclean
    [ -x ./configure ] || ./autogen.sh > /dev/null
    ./configure --prefix=/usr \
                --enable-outputs \
                --enable-clock \
                --enable-visualizer \
                --with-fftw \
                --with-taglib > configure$$.out
    make > make$$.out
    cd ..
  fi

  # Build mppcava
  if [ -x scripts/build-mppcava.sh ]
  then
    scripts/build-mppcava.sh
  else
    cd mppcava
    make clean
    make distclean
    [ -x ./configure ] || ./autogen.sh > /dev/null
    ./configure --prefix=/usr > configure$$.out
    make > make$$.out
    cd ..
  fi

  # Build bliss-analyze
  if [ -x scripts/build-bliss-analyze.sh ]
  then
    scripts/build-bliss-analyze.sh
  else
    PROJ=bliss-analyze
    [ -d ${PROJ} ] || git clone https://github.com/doctorfree/bliss-analyze
    [ -x ${PROJ}/target/release/bliss-analyze ] || {
      have_cargo=`type -p cargo`
      if [ "${have_cargo}" ]
      then
        cd ${PROJ}
        PKGPATH=`pkg-config --variable pc_path pkg-config`
        [ -d /usr/lib/ffmpeg4.4/pkgconfig ] && {
          PKGPATH="/usr/lib/ffmpeg4.4/pkgconfig:${PKGPATH}"
        }
        export PKG_CONFIG_PATH="${PKGPATH}:/usr/lib/pkgconfig"
        cargo build --frozen --release --all-features
        cd ..
      else
        echo "The cargo tool cannot be located."
        echo "Cargo is required to build bliss-analyze."
      fi
    }
  fi

  # Build blissify
  if [ -x scripts/build-blissify.sh ]
  then
    scripts/build-blissify.sh
  else
    PROJ=blissify
    [ -d ${PROJ} ] || git clone https://github.com/doctorfree/blissify
    [ -x ${PROJ}/target/release/blissify ] || {
      have_cargo=`type -p cargo`
      if [ "${have_cargo}" ]
      then
        cd ${PROJ}
        PKGPATH=`pkg-config --variable pc_path pkg-config`
        [ -d /usr/lib/ffmpeg4.4/pkgconfig ] && {
          PKGPATH="/usr/lib/ffmpeg4.4/pkgconfig:${PKGPATH}"
        }
        export PKG_CONFIG_PATH="${PKGPATH}:/usr/lib/pkgconfig"
        cargo build --frozen --release --all-features
        cd ..
      else
        echo "The cargo tool cannot be located."
        echo "Cargo is required to build blissify."
      fi
    }
  fi

  # Build essentia
  if [ -x scripts/build-essentia.sh ]
  then
    scripts/build-essentia.sh
  else
    cd essentia
    PKGPATH=`pkg-config --variable pc_path pkg-config`
    [ -d /usr/lib/ffmpeg4.4/pkgconfig ] && {
      PKGPATH="/usr/lib/ffmpeg4.4/pkgconfig:${PKGPATH}"
    }
    export PKG_CONFIG_PATH="${PKGPATH}:/usr/lib/pkgconfig"
    python3 waf configure --prefix=/usr \
                          --build-static \
                          --with-python \
                          --with-gaia \
                          --with-example=streaming_extractor_music
    python3 waf
    cd ..
  fi
}

package() {
  cd "${srcdir}/${pkgname}"
  destdir=usr
  for dir in "${destdir}" "${destdir}/share" "${destdir}/share/man" \
    "${destdir}/share/applications" "${destdir}/share/doc" \
    "${destdir}/share/doc/${pkgname}" "${destdir}/share/doc/${pkgname}/mpcplus" \
    "${destdir}/share/consolefonts" "${destdir}/share/${pkgname}" \
    "${destdir}/share/licenses" \
    "${destdir}/share/licenses/${pkgname}" \
    "${destdir}/share/${pkgname}/mpcplus" \
    "${destdir}/share/doc/${pkgname}/blissify" \
    "${destdir}/share/doc/${pkgname}/bliss-analyze"
  do
    [ -d ${pkgdir}/${dir} ] || mkdir ${pkgdir}/${dir}
  done

  for dir in bin
  do
    [ -d ${pkgdir}/${destdir}/${dir} ] && rm -rf ${pkgdir}/${destdir}/${dir}
  done

  cp -a bin ${pkgdir}/${destdir}/bin
  cp mpcplus/src/mpcplus ${pkgdir}/${destdir}/bin/mpcplus
  cp mppcava/mppcava ${pkgdir}/${destdir}/bin/mppcava
  cp mppcava/mppcava.psf ${pkgdir}/${destdir}/share/consolefonts
  [ -f blissify/target/release/blissify ] && {
    cp blissify/target/release/blissify ${pkgdir}/${destdir}/bin
  }
  [ -f bliss-analyze/target/release/bliss-analyze ] && {
    cp bliss-analyze/target/release/bliss-analyze ${pkgdir}/${destdir}/bin
  }
  cp essentia/build/src/examples/essentia_streaming_extractor_music \
           ${pkgdir}/${destdir}/bin

  cp *.desktop "${pkgdir}/${destdir}/share/applications"
  cp copyright ${pkgdir}/${destdir}/share/doc/${pkgname}
  cp LICENSE ${pkgdir}/${destdir}/share/doc/${pkgname}
  cp LICENSE ${pkgdir}/${destdir}/share/licenses/${pkgname}
  cp NOTICE ${pkgdir}/${destdir}/share/doc/${pkgname}
  cp CHANGELOG.md ${pkgdir}/${destdir}/share/doc/${pkgname}
  cp README.md ${pkgdir}/${destdir}/share/doc/${pkgname}
  pandoc -f gfm README.md | tee ${pkgdir}/${destdir}/share/doc/${pkgname}/README.html > /dev/null
  gzip -9 ${pkgdir}/${destdir}/share/doc/${pkgname}/CHANGELOG.md

  cp mpcplus/AUTHORS ${pkgdir}/${destdir}/share/doc/${pkgname}/mpcplus
  cp mpcplus/COPYING ${pkgdir}/${destdir}/share/doc/${pkgname}/mpcplus
  cp mpcplus/CHANGELOG.md ${pkgdir}/${destdir}/share/doc/${pkgname}/mpcplus
  cp mpcplus/README.md ${pkgdir}/${destdir}/share/doc/${pkgname}/mpcplus

  cp blissify/CHANGELOG.md ${pkgdir}/${destdir}/share/doc/${pkgname}/blissify
  cp blissify/README.md ${pkgdir}/${destdir}/share/doc/${pkgname}/blissify

  cp bliss-analyze/ChangeLog ${pkgdir}/${destdir}/share/doc/${pkgname}/bliss-analyze
  cp bliss-analyze/LICENSE ${pkgdir}/${destdir}/share/doc/${pkgname}/bliss-analyze
  cp bliss-analyze/README.md ${pkgdir}/${destdir}/share/doc/${pkgname}/bliss-analyze

  cp asound.conf.tmpl ${pkgdir}/${destdir}/share/${pkgname}
  cp mpcplus/doc/config ${pkgdir}/${destdir}/share/${pkgname}/mpcplus
  cp mpcplus/doc/bindings ${pkgdir}/${destdir}/share/${pkgname}/mpcplus
  cp config/config-art.conf ${pkgdir}/${destdir}/share/${pkgname}/mpcplus
  cp config/default_cover.png ${pkgdir}/${destdir}/share/${pkgname}/mpcplus
  cp config/fzmp.conf ${pkgdir}/${destdir}/share/${pkgname}/mpcplus
  cp share/mpcplus-cheat-sheet.txt ${pkgdir}/${destdir}/share/${pkgname}/mpcplus
  cp share/mpcplus-cheat-sheet.md ${pkgdir}/${destdir}/share/${pkgname}/mpcplus

  cp -a share/scripts ${pkgdir}/${destdir}/share/${pkgname}/scripts
  cp -a share/svm_models ${pkgdir}/${destdir}/share/${pkgname}/svm_models
  cp -a share/calliope ${pkgdir}/${destdir}/share/${pkgname}/calliope

  cp config/xterm-24bit.src ${pkgdir}/${destdir}/share/${pkgname}
  cp config/tmux.conf ${pkgdir}/${destdir}/share/${pkgname}

  cp -a config/beets "${pkgdir}/${destdir}/share/${pkgname}/beets"
  cp -a beets "${pkgdir}/${destdir}/share/${pkgname}/beets/plugins"
  cp config/calliope/* "${pkgdir}/${destdir}/share/${pkgname}/calliope"
  cp -a config/kitty "${pkgdir}/${destdir}/share/${pkgname}/kitty"
  cp -a config/mopidy "${pkgdir}/${destdir}/share/${pkgname}/mopidy"
  cp -a config/mpd "${pkgdir}/${destdir}/share/${pkgname}/mpd"
  cp -a config/mppcava "${pkgdir}/${destdir}/share/${pkgname}/mppcava"
  cp mppcava/example_files/config ${pkgdir}/${destdir}/share/${pkgname}/mppcava/template.conf
  cp -a config/navidrome "${pkgdir}/${destdir}/share/${pkgname}/navidrome"
  cp -a config/tmuxp ${pkgdir}/${destdir}/share/${pkgname}/tmuxp
  cp -a config/yt-dlp "${pkgdir}/${destdir}/share/${pkgname}/yt-dlp"
  cp -a music "${pkgdir}/${destdir}/share/${pkgname}/music"

  cp -a man/man1 ${pkgdir}/${destdir}/share/man/man1
  cp -a man/man5 ${pkgdir}/${destdir}/share/man/man5
  cp -a share/menu "${pkgdir}/${destdir}/share/menu"

  [ -f .gitignore ] && {
    while read ignore
    do
        rm -f ${pkgdir}/${destdir}/${ignore}
    done < .gitignore
  }

  chmod 644 ${pkgdir}/${destdir}/share/man/*/*
  chmod 644 ${pkgdir}/${destdir}/share/menu/*
  chmod 755 ${pkgdir}/${destdir}/bin/* \
            ${pkgdir}/${destdir}/bin \
            ${pkgdir}/${destdir}/share/man \
            ${pkgdir}/${destdir}/share/man/* \
            ${pkgdir}/${destdir}/share/${pkgname}/scripts/*
}
