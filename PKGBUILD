# Maintainer: Oleg Shparber <trollixx+aur@gmail.com>
# Contributor: Andreas Radke <andyrtr@archlinux.org>
# Contributor: Guillaume ALAUX <guillaume@archlinux.org>
# Contributor: Jan de Groot <jgc@archlinux.org>
# URL: https://github.com/trollixx/aur-packages
# Upstream: https://projects.archlinux.org/svntogit/packages.git/?h=packages/java7-openjdk

pkgname=('jre7-openjdk-headless-infinality' 'jre7-openjdk-infinality' 'jdk7-openjdk-infinality')
pkgbase=java7-openjdk
_java_ver=7
_icedtea_ver=2.6.4
_updatever=95
pkgver=${_java_ver}.u${_updatever}_${_icedtea_ver}
pkgrel=1

_bootstrap=0 # 0/1 for quick build or full bootstrap

arch=('i686' 'x86_64')
url='http://icedtea.classpath.org'
license=('custom')
options=('!emptydirs')
makedepends=('jdk7-openjdk' 'libxp' 'libxslt'
             'alsa-lib' 'apache-ant>=1.8.1' 'giflib' 'libpng>=1.5.7' 'gtk2'
             'java-rhino' 'libpulse>=0.9.11' 'zip' 'unzip' 'cpio' 'fastjar' 'wget'
             'eclipse-ecj' 'pcsclite' 'lksctp-tools')

_icedtea_url=http://icedtea.classpath.org/download
_drops_url=${_icedtea_url}/drops/icedtea7/${_icedtea_ver}
source=(${_icedtea_url}/source/icedtea-${_icedtea_ver}.tar.gz
        icedtea_${_icedtea_ver}_openjdk.tar.bz2::${_drops_url}/openjdk.tar.bz2
        icedtea_${_icedtea_ver}_corba.tar.bz2::${_drops_url}/corba.tar.bz2
        icedtea_${_icedtea_ver}_jaxp.tar.bz2::${_drops_url}/jaxp.tar.bz2
        icedtea_${_icedtea_ver}_jaxws.tar.bz2::${_drops_url}/jaxws.tar.bz2
        icedtea_${_icedtea_ver}_jdk.tar.bz2::${_drops_url}/jdk.tar.bz2
        icedtea_${_icedtea_ver}_langtools.tar.bz2::${_drops_url}/langtools.tar.bz2
        icedtea_${_icedtea_ver}_hotspot.tar.bz2::${_drops_url}/hotspot.tar.bz2
        fontconfig-paths.diff
        openjdk7_nonreparenting-wm.diff)

sha256sums=('ef5dd43c5f87742ac28519420055ad24acaca55b005b5b2e339cf3e451d716c1'
            'bb02e71972ad606e739c79fc11c6dc61b4840a526a41049a600a206cc37152e2'
            '26bbfae0504fb7e83fd5eaba08d9e44e0c07a609cdf7c04fb6832a097b56bc08'
            '097cb0423271b6439b36db190a66bab9d447dd03ee22e42a6089a3b3b8363f62'
            'da7604aaaedaab93ba9ad21ee5ee8f18c807606a97d60037ae8c3647e823dfa1'
            '9d3199c0f9c39238c6920c941026cf8661a92e97845f75d74e9ff277532b5d63'
            'f9b0ce14c73c263276d3dfe78601714869cd2c0463bd01c637c8556d52a7d7cc'
            '3747417c3ba69d1ff7d80dc6df19454c4f4023c35f8b711e47baefe2fc772e65'
            '9ad943ceb3dbcdf45d72974fc3667886a7ed65c69ab9abc17be5412827551a7f'
            '56b919ababb13bd6afdcdaceb112b529b6e82539255f2dae9a7e5eb91645164b')

noextract=(icedtea_${_icedtea_ver}_openjdk.tar.bz2
           icedtea_${_icedtea_ver}_corba.tar.bz2
           icedtea_${_icedtea_ver}_jaxp.tar.bz2
           icedtea_${_icedtea_ver}_jaxws.tar.bz2
           icedtea_${_icedtea_ver}_jdk.tar.bz2
           icedtea_${_icedtea_ver}_langtools.tar.bz2
           icedtea_${_icedtea_ver}_hotspot.tar.bz2)

[ "$CARCH" = "x86_64" ] && _JARCH=amd64
[ "$CARCH" = "i686" ]   && _JARCH=i386

_jvmdir=/usr/lib/jvm/java-7-openjdk
_imgdir="icedtea-${_icedtea_ver}/openjdk.build/j2sdk-image"
_nonheadless=(bin/policytool
              lib/${_JARCH}/libjsoundalsa.so
              lib/${_JARCH}/libsplashscreen.so
              lib/${_JARCH}/xawt/libmawt.so)

build() {
  cd "${srcdir}/icedtea-${_icedtea_ver}"

  export ALT_PARALLEL_COMPILE_JOBS="${MAKEFLAGS/-j}"
  export HOTSPOT_BUILD_JOBS="${ALT_PARALLEL_COMPILE_JOBS}"

  . /etc/profile.d/apache-ant.sh

  cp "${srcdir}"/*.diff "${srcdir}"/icedtea-${_icedtea_ver}/patches
  export DISTRIBUTION_PATCHES="patches/fontconfig-paths.diff \
                               patches/openjdk7_nonreparenting-wm.diff"

  if [ "$_bootstrap" = "1" ]; then
     BOOTSTRAPOPT="--enable-bootstrap --with-ecj-jar=/usr/share/java/ecj.jar"
   else
     BOOTSTRAPOPT="--disable-bootstrap"
  fi

  ./configure \
        ${BOOTSTRAPOPT} \
        --with-parallel-jobs="${MAKEFLAGS/-j}" \
        --disable-tests \
        --disable-downloading --disable-Werror \
        --with-pkgversion="Arch Linux build ${pkgver}-${pkgrel}-${CARCH}" \
        --with-jdk-home=${JAVA_HOME} \
        --with-openjdk-src-zip="${srcdir}/icedtea_${_icedtea_ver}_openjdk.tar.bz2" \
        --with-hotspot-src-zip="${srcdir}/icedtea_${_icedtea_ver}_hotspot.tar.bz2" \
        --with-corba-src-zip="${srcdir}/icedtea_${_icedtea_ver}_corba.tar.bz2" \
        --with-jaxp-src-zip="${srcdir}/icedtea_${_icedtea_ver}_jaxp.tar.bz2" \
        --with-jaxws-src-zip="${srcdir}/icedtea_${_icedtea_ver}_jaxws.tar.bz2" \
        --with-jdk-src-zip="${srcdir}/icedtea_${_icedtea_ver}_jdk.tar.bz2" \
        --with-langtools-src-zip="${srcdir}/icedtea_${_icedtea_ver}_langtools.tar.bz2" \
        --enable-nss \
        --with-rhino \
        --with-abs-install-dir=${_jvmdir} \
        --enable-infinality=yes
    make
}

check() {
  cd "${srcdir}/icedtea-${_icedtea_ver}"
  make -k check
}

package_jre7-openjdk-headless-infinality() {
  pkgdesc='OpenJDK Java 7 headless runtime environment'
  depends=('java-runtime-common' 'libjpeg-turbo' 'lcms2' 'nss' 'ca-certificates-java')
  optdepends=('libcups: needed for Java Mauve support - libmawt.so'
              'fontconfig: needed for Java Mauve support - libmawt.so'
              'java-rhino: for some JavaScript support')
  provides=('java-runtime-headless=7' 'java-runtime-headless-openjdk=7' "jre7-openjdk-headless=${pkgver}-${pkgrel}")
  conflicts=('openjdk6' 'jre7-openjdk-headless' 'jre7-openjdk-headless-fontfix')
  # TODO remove after some time
  replaces=('jre7-openjdk-headless-wm')
  # Upstream config files that should go to etc and get backup
  _backup_etc=(etc/java-7-openjdk/${_JARCH}/jvm.cfg
               etc/java-7-openjdk/calendars.properties
               etc/java-7-openjdk/content-types.properties
               etc/java-7-openjdk/flavormap.properties
               etc/java-7-openjdk/fontconfig.bfc
               etc/java-7-openjdk/fontconfig.properties
               etc/java-7-openjdk/images/cursors/cursors.properties
               etc/java-7-openjdk/logging.properties
               etc/java-7-openjdk/management/jmxremote.access
               etc/java-7-openjdk/management/jmxremote.password
               etc/java-7-openjdk/management/management.properties
               etc/java-7-openjdk/management/snmp.acl
               etc/java-7-openjdk/net.properties
               etc/java-7-openjdk/psfont.properties.ja
               etc/java-7-openjdk/psfontj2d.properties
               etc/java-7-openjdk/security/java.policy
               etc/java-7-openjdk/security/java.security
               etc/java-7-openjdk/security/nss.cfg
               etc/java-7-openjdk/sound.properties
               etc/java-7-openjdk/tz.properties)
  backup=(${_backup_etc[@]})
  install=jre7-openjdk-headless.install

  cd "${srcdir}/${_imgdir}/jre"

  install -d -m755 "${pkgdir}${_jvmdir}/jre"
  cp -a bin lib "${pkgdir}${_jvmdir}/jre"

  # Set config files
  mv "${pkgdir}${_jvmdir}"/jre/lib/fontconfig.{Ubuntu.properties.src,properties}
  mv "${pkgdir}${_jvmdir}"/jre/lib/fontconfig.{Ubuntu.bfc,bfc}
  mv "${pkgdir}${_jvmdir}"/jre/lib/management/jmxremote.password{.template,}
  mv "${pkgdir}${_jvmdir}"/jre/lib/management/snmp.acl{.template,}
  rm -f "${pkgdir}${_jvmdir}"/jre/lib/fontconfig.*.bfc
  rm -f "${pkgdir}${_jvmdir}"/jre/lib/fontconfig.*.properties.src
  rm -f "${pkgdir}${_jvmdir}"/jre/lib/fontconfig.properties.src

  # Remove 'non-headless' files
  for f in ${_nonheadless[@]}; do
    rm "${pkgdir}${_jvmdir}/jre/${f}"
  done

  # Man pages
  pushd "${pkgdir}${_jvmdir}/jre/bin"
  install -d -m 755 "${pkgdir}"/usr/share/man/{,ja/}man1/
  for file in *; do
    install -m 644 "${srcdir}/${_imgdir}/man/man1/${file}.1" \
      "${pkgdir}/usr/share/man/man1/${file}.1"
    install -m 644 "${srcdir}/${_imgdir}/man/ja/man1/${file}.1" \
      "${pkgdir}/usr/share/man/ja/man1/${file}.1"
  done
  popd

  # Link JKS keystore from ca-certificates-java
  rm -f "${pkgdir}${_jvmdir}/jre/lib/security/cacerts"
  ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}${_jvmdir}/jre/lib/security/cacerts"

  # Install license
  install -d -m755 "${pkgdir}/usr/share/licenses/${pkgbase}/"
  install -m644 ASSEMBLY_EXCEPTION LICENSE THIRD_PARTY_README \
                 "${pkgdir}/usr/share/licenses/${pkgbase}"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"

  # Move config files that were set in _backup_etc from ./lib to /etc
  for file in ${_backup_etc[@]}; do
    _filepkgpath=${_jvmdir}/jre/lib/${file#etc/java-7-openjdk/}
    install -D -m 644 "${pkgdir}${_filepkgpath}" "${pkgdir}/${file}"
    ln -sf /${file} "${pkgdir}${_filepkgpath}"
  done
}

package_jre7-openjdk-infinality() {
  pkgdesc='OpenJDK Java 7 full runtime environment'
  depends=("jre7-openjdk-headless-infinality=${pkgver}-${pkgrel}" 'xdg-utils' 'hicolor-icon-theme')
  optdepends=('icedtea-web-java7: web browser plugin + Java Web Start'
             'alsa-lib: for basic sound support'
             'giflib: for gif format support'
             'libpulse: for advanced sound support'
             'gtk2: for the Gtk+ look and feel - desktop usage'
             'libxtst: linked in xawt/libmawt.so - desktop usage')
  provides=('java-runtime=7' 'java-runtime-openjdk=7' "jre7-openjdk=${pkgver}-${pkgrel}")
  conflicts=('openjdk6' 'jre7-openjdk')
  # TODO remove after some time
  replaces=('jre7-openjdk-wm')
  install=jre7-openjdk.install

  cd "${srcdir}/${_imgdir}/jre"

  for f in ${_nonheadless[@]}; do
    install -D ${f} "${pkgdir}${_jvmdir}/jre/${f}"
  done

  # Man pages
  pushd "${pkgdir}${_jvmdir}/jre/bin"
  install -d -m 755 "${pkgdir}"/usr/share/man/{,ja/}man1/
  for file in *; do
    install -m 644 "${srcdir}/${_imgdir}/man/man1/${file}.1" \
      "${pkgdir}/usr/share/man/man1/${file}.1"
    install -m 644 "${srcdir}/${_imgdir}/man/ja/man1/${file}.1" \
      "${pkgdir}/usr/share/man/ja/man1/${file}.1"
  done
  popd

  for s in 16 24 32 48; do
    install -D -m 644 \
      "${srcdir}/icedtea-${_icedtea_ver}/openjdk/jdk/src/solaris/classes/sun/awt/X11/java-icon${s}.png" \
      "${pkgdir}/usr/share/icons/hicolor/${s}x${s}/apps/java.png"
  done

  # Install desktop files.
  install -d -m755 "${pkgdir}/usr/share/applications"
  install -m644 "${srcdir}/icedtea-${_icedtea_ver}/policytool.desktop" "${pkgdir}/usr/share/applications"

  # link license
  install -d -m755 "${pkgdir}/usr/share/licenses"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_jdk7-openjdk-infinality() {
  pkgdesc='OpenJDK Java 7 development kit'
  depends=('java-environment-common' "jre7-openjdk-infinality=${pkgver}-${pkgrel}")
  provides=('java-environment=7' 'java-environment-openjdk=7' "jdk7-openjdk=${pkgver}-${pkgrel}")
  conflicts=('jdk7-openjdk')
  replaces=('openjdk6' 'jdk7-openjdk-wm')
  install=jdk7-openjdk.install

  cd "${srcdir}/${_imgdir}"

  # Main files
  install -d -m755 "${pkgdir}${_jvmdir}"

  cp -a include lib "${pkgdir}${_jvmdir}"

  # 'bin' files
  pushd bin
  install -d -m755 "${pkgdir}${_jvmdir}/bin/" \
                   "${pkgdir}"/usr/share/man/{,ja/}man1/

  # 'java-rmi.cgi' will be handled separately as it should not be in the PATH and has no man page
  for b in $(ls | grep -v java-rmi.cgi); do
    if [ -e ../jre/bin/${b} ]; then
      # Provide a link of the jre binary in the jdk/bin/ directory
      ln -s ../jre/bin/${b} "${pkgdir}${_jvmdir}/bin/${b}"
    else
      # Copy binary to jdk/bin/
      install -m755 ${b} "${pkgdir}${_jvmdir}/bin/${b}"
      # Copy man page
      install -m644 ../man/man1/${b}.1 "${pkgdir}/usr/share/man/man1/${b}.1"
      install -m644 ../man/ja/man1/${b}.1 "${pkgdir}/usr/share/man/ja/man1/${b}.1"
    fi
  done
  popd

  # Handling 'java-rmi.cgi' separately
  install -D -m755 bin/java-rmi.cgi "${pkgdir}${_jvmdir}/bin/java-rmi.cgi"

  # Install desktop files.
  install -d -m755 "${pkgdir}/usr/share/applications"
  install -m644 "${srcdir}/icedtea-${_icedtea_ver}/jconsole.desktop" "${pkgdir}/usr/share/applications"

  # Temporarily fixing FS#35141
  chmod go+r "${pkgdir}${_jvmdir}/lib/sa-jdi.jar"

  # link license
  install -d -m755 "${pkgdir}/usr/share/licenses"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"
}
