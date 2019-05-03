# Maintainer: Guillaume ALAUX <guillaume@archlinux.org>
# Contributor: Boyan Ding <stu_dby@126.com>

# TODO
# once icedtea:
#   pulse
#   add policytool desktop files

# Package 'openjfx' must be updated when this one is
pkgname=('jre8-openjdk-shenandoah-headless' 'jre8-openjdk-shenandoah' 'jdk8-openjdk-shenandoah' 'openjdk8-shenandoah-src' 'openjdk8-shenandoah-doc')
pkgbase=java8-openjdk-shenandoah
_java_ver=8
# Found @ http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
_jdk_update=181
_jdk_build=31
# _repo_ver=jdk${_java_ver}u${_jdk_update}-b${_jdk_build}
pkgrel=1
arch=('x86_64')
url='http://openjdk.java.net/'
license=('custom')
makedepends=('java-environment=8' 'cpio' 'unzip' 'zip' 'gcc'
             'libxrender' 'libxtst' 'fontconfig' 'libcups' 'alsa-lib')
_url_src=http://hg.openjdk.java.net/shenandoah/jdk8u
_last_update=20190501
declare -g -A _repo_versions=(
    [jdk8u]=abfdf545dc36
    [corba]=79a3151ebf00
    [hotspot]=a994d7874724
    [jdk]=2a6d6dfe0a5f
    [jaxws]=987a27eef8e6
    [jaxp]=34889baf492b
    [langtools]=da3019ae4eed
    [nashorn]=67f49e0ffa83
)
pkgver=${_java_ver}.u${_jdk_update}_${_last_update}_hotspot${_repo_versions[hotspot]}
source=("jdk8u-${_repo_versions[jdk8u]}.tar.gz::${_url_src}/archive/${_repo_versions[jdk8u]}.tar.gz"
        "corba-${_repo_versions[corba]}.tar.gz::${_url_src}/corba/archive/${_repo_versions[corba]}.tar.gz"
        "hotspot-${_repo_versions[hotspot]}.tar.gz::${_url_src}/hotspot/archive/${_repo_versions[hotspot]}.tar.gz"
        "jdk-${_repo_versions[jdk]}.tar.gz::${_url_src}/jdk/archive/${_repo_versions[jdk]}.tar.gz"
        "jaxws-${_repo_versions[jaxws]}.tar.gz::${_url_src}/jaxws/archive/${_repo_versions[jaxws]}.tar.gz"
        "jaxp-${_repo_versions[jaxp]}.tar.gz::${_url_src}/jaxp/archive/${_repo_versions[jaxp]}.tar.gz"
        "langtools-${_repo_versions[langtools]}.tar.gz::${_url_src}/langtools/archive/${_repo_versions[langtools]}.tar.gz"
        "nashorn-${_repo_versions[nashorn]}.tar.gz::${_url_src}/nashorn/archive/${_repo_versions[nashorn]}.tar.gz")

sha256sums=('9c9309a92f603eba3b638baa8dcbdc66666565b131e377b0be5540ecd330a9af'
            '67ac5b1049249af5c8caafbe4ab0e415650fccdca9f05dffdb83f735be4ec6c9'
            'a03dc4642241cc6f7ec6abc9eeba261d25440b8457e4ef43978fce70e989f577'
            '95eba6158e909edee8f49a8cb79db3c3b4807402acd35a01a15bf6d508959d55'
            '172ac7cf908de094ab6eeda11c26e5c20fca6b909cbe81c2b141968b990b6a55'
            'd096661e36ea4bdc1dac008330955774ef76aa8c90002eef465cfd686edd1c22'
            '007372f11297b99f90b1a1928e12f728e0d6549ac5fdb1f46496b9bb840841a2'
            '5e6030ad51e4afa155c72da399cf3c785744b32150eb5c91e6cc7b557c11f551')

case "${CARCH}" in
  'x86_64') _JARCH=amd64 ; _DOC_ARCH=x86_64 ;;
  'i686'  ) _JARCH=i386  ; _DOC_ARCH=x86    ;;
esac

_jdkname=openjdk8
_jvmdir=/usr/lib/jvm/java-8-openjdk-shenandoah
_prefix="jdk8u-${_repo_versions[jdk8u]}/image"
_imgdir="${_prefix}/jvm/openjdk-1.8.0_$(printf '%.2d' ${_jdk_update})"
_nonheadless=(bin/policytool
              lib/${_JARCH}/libjsound.so
              lib/${_JARCH}/libjsoundalsa.so
              lib/${_JARCH}/libsplashscreen.so)

prepare() {
  cd "${srcdir}/jdk8u-${_repo_versions[jdk8u]}"
  for subrepo in corba hotspot jdk jaxws jaxp langtools nashorn; do
    ln -s "../${subrepo}-${_repo_versions[$subrepo]}" ${subrepo}
  done
}

build() {
  cd "${srcdir}/jdk8u-${_repo_versions[jdk8u]}"

  # Detecting Java version by the first line of the output
  # of `java --version` is such a great idea
  unset JAVA_HOME _JAVA_OPTIONS
  # http://icedtea.classpath.org/bugzilla/show_bug.cgi?id=1346
  export MAKEFLAGS=${MAKEFLAGS/-j*}

  # We filter out -O flags so that the optimization of HotSpot is not lowered from O3 to O2
  export CFLAGS="${CFLAGS//-O2/-O3} ${CPPFLAGS} -Wno-error=deprecated-declarations -Wno-error=stringop-overflow= -Wno-error=return-type -Wno-error=cpp -fno-lifetime-dse -fno-delete-null-pointer-checks"
  export CXXFLAGS="${CXXFLAGS} ${CPPFLAGS}"

  install -d -m 755 "${srcdir}/${_prefix}/"
  sh configure \
    --prefix="${srcdir}/${_prefix}" \
    --with-update-version="${_jdk_update}" \
    --with-build-number="b${_jdk_build}" \
    --with-milestone="fcs" \
    --enable-unlimited-crypto \
    --with-zlib=system \
    --with-extra-cflags="${CFLAGS}" \
    --with-extra-cxxflags="${CXXFLAGS}" \
    --with-extra-ldflags="${LDFLAGS}"

  # TODO OpenJDK does not want last version of giflib (add 'giflib' as dependency once fixed)
  #--with-giflib=system \

  # These help to debug builds: LOG=trace HOTSPOT_BUILD_JOBS=1
  # Without 'DEBUG_BINARIES', i686 won't build: http://mail.openjdk.java.net/pipermail/core-libs-dev/2013-July/019203.html
  make
  make docs

  # FIXME sadly 'DESTDIR' is not used here!
  make install

  cd "${srcdir}/${_imgdir}"

  # A lot of build stuff were directly taken from
  # http://pkgs.fedoraproject.org/cgit/java-1.8.0-openjdk.git/tree/java-1.8.0-openjdk.spec

  # http://icedtea.classpath.org/bugzilla/show_bug.cgi?id=1437
  find . -iname '*.jar' -exec chmod ugo+r {} \;
  chmod ugo+r lib/ct.sym

  # remove redundant *diz and *debuginfo files
  find . -iname '*.diz' -exec rm {} \;
  find . -iname '*.debuginfo' -exec rm {} \;
}

#check() {
#  cd "${srcdir}/${pkgname}-${pkgver}"
#  make -k check
#}

package_jre8-openjdk-shenandoah-headless() {
  pkgdesc='OpenJDK Java 8 headless runtime environment'
  depends=('java-runtime-common' 'ca-certificates-utils' 'nss')
  optdepends=('java-rhino: for some JavaScript support')
  provides=('java-runtime-headless=8' 'java-runtime-headless-openjdk=8' 'java-runtime-headless-shenandoah=8')
  # Upstream config files that should go to etc and get backup
  _backup_etc=(etc/java-8-openjdk-shenandoah/${_JARCH}/jvm.cfg
               etc/java-8-openjdk-shenandoah/calendars.properties
               etc/java-8-openjdk-shenandoah/content-types.properties
               etc/java-8-openjdk-shenandoah/flavormap.properties
               etc/java-8-openjdk-shenandoah/images/cursors/cursors.properties
               etc/java-8-openjdk-shenandoah/logging.properties
               etc/java-8-openjdk-shenandoah/management/jmxremote.access
               etc/java-8-openjdk-shenandoah/management/jmxremote.password
               etc/java-8-openjdk-shenandoah/management/management.properties
               etc/java-8-openjdk-shenandoah/management/snmp.acl
               etc/java-8-openjdk-shenandoah/net.properties
               etc/java-8-openjdk-shenandoah/psfont.properties.ja
               etc/java-8-openjdk-shenandoah/psfontj2d.properties
               etc/java-8-openjdk-shenandoah/security/java.policy
               etc/java-8-openjdk-shenandoah/security/java.security
               etc/java-8-openjdk-shenandoah/sound.properties)
  backup=(${_backup_etc[@]})
  install=install_jre8-openjdk-headless.sh

  cd "${srcdir}/${_imgdir}/jre"

  install -d -m 755 "${pkgdir}${_jvmdir}/jre/"
  cp -rv --no-preserve=ownership bin lib "${pkgdir}${_jvmdir}/jre"

  # Set config files
  mv "${pkgdir}${_jvmdir}"/jre/lib/management/jmxremote.password{.template,}
  mv "${pkgdir}${_jvmdir}"/jre/lib/management/snmp.acl{.template,}

  # Remove 'non-headless' lib files
  for f in "${_nonheadless[@]}"; do
    rm "${pkgdir}${_jvmdir}/jre/${f}"
  done

  # Man pages (skip to avoid conflict)
  # pushd "${pkgdir}${_jvmdir}/jre/bin"
  # install -d -m 755 "${pkgdir}"/usr/share/man/{,ja/}man1/
  # for file in *; do
  #   install -m 644 "${srcdir}/${_imgdir}/man/man1/${file}.1" \
  #     "${pkgdir}/usr/share/man/man1/${file}-${_jdkname}.1"
  #   install -m 644 "${srcdir}/${_imgdir}/man/ja/man1/${file}.1" \
  #     "${pkgdir}/usr/share/man/ja/man1/${file}-${_jdkname}.1"
  # done
  # popd

  # Link JKS keystore from ca-certificates-utils
  rm -f "${pkgdir}${_jvmdir}/jre/lib/security/cacerts"
  ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}${_jvmdir}/jre/lib/security/cacerts"

  # Install license
  install -d -m 755 "${pkgdir}/usr/share/licenses/${pkgbase}/"
  install -m 644 ASSEMBLY_EXCEPTION LICENSE THIRD_PARTY_README \
                 "${pkgdir}/usr/share/licenses/${pkgbase}"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"

  # Move config files that were set in _backup_etc from ./lib to /etc
  for file in "${_backup_etc[@]}"; do
    _filepkgpath=${_jvmdir}/jre/lib/${file#etc/java-8-openjdk-shenandoah/}
    install -D -m 644 "${pkgdir}${_filepkgpath}" "${pkgdir}/${file}"
    ln -sf /${file} "${pkgdir}${_filepkgpath}"
  done
}

package_jre8-openjdk-shenandoah() {
  pkgdesc='OpenJDK Java 8 full runtime environment'
  depends=("jre8-openjdk-shenandoah-headless=${pkgver}-${pkgrel}" 'xdg-utils' 'hicolor-icon-theme')
  optdepends=('icedtea-web: web browser plugin + Java Web Start'
              'alsa-lib: for basic sound support'
              'gtk2: for the Gtk+ look and feel - desktop usage'
              'java-openjfx: for JavaFX GUI components support')
  # TODO when adding IcedTea: 'giflib: for gif format support'
  # TODO when adding IcedTea: 'libpulse: for advanced sound support'
  provides=('java-runtime=8' 'java-runtime-openjdk=8' 'java-runtime-openjdk-shenandoah=8')
  install=install_jre8-openjdk.sh

  cd "${srcdir}/${_imgdir}/jre"

  for f in ${_nonheadless[@]}; do
    install -D ${f} "${pkgdir}${_jvmdir}/jre/${f}"
  done

  # Man pages (skip to avoid conflict)
  # pushd "${pkgdir}${_jvmdir}/jre/bin"
  # install -d -m 755 "${pkgdir}"/usr/share/man/{,ja/}man1/
  # for file in *; do
  #   install -m 644 "${srcdir}/${_imgdir}/man/man1/${file}.1" \
  #     "${pkgdir}/usr/share/man/man1/${file}-${_jdkname}.1"
  #   install -m 644 "${srcdir}/${_imgdir}/man/ja/man1/${file}.1" \
  #     "${pkgdir}/usr/share/man/ja/man1/${file}-${_jdkname}.1"
  # done
  # popd

  # Desktop files
  # TODO add these when switching to IcedTea
  #install -D -m 644 "${srcdir}/icedtea-${_icedtea_ver}/policytool.desktop" \
  #                  "${pkgdir}/usr/share/applications/policytool.desktop"

  # Install license
  install -d -m 755 "${pkgdir}/usr/share/licenses/${pkgbase}/"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_jdk8-openjdk-shenandoah() {
  pkgdesc='OpenJDK Java 8 development kit'
  depends=('java-environment-common' "jre8-openjdk-shenandoah=${pkgver}-${pkgrel}")
  provides=('java-environment=8' 'java-environment-openjdk=8' 'java-environment-openjdk-shenandoah=8')
  install=install_jdk8-openjdk.sh

  cd "${srcdir}/${_imgdir}"

  # Main files
  install -d -m 755 "${pkgdir}${_jvmdir}"

  cp -a include lib "${pkgdir}${_jvmdir}"

  # 'bin' files
  pushd bin

  # 'java-rmi.cgi' will be handled separately as it should not be in the PATH and has no man page
  for b in $(ls | grep -v java-rmi.cgi); do
    if [ -e ../jre/bin/${b} ]; then
      # Provide a link of the jre binary in the jdk/bin/ directory
      ln -s ../jre/bin/${b} "${pkgdir}${_jvmdir}/bin/${b}"
    else
      # Copy binary to jdk/bin/
      install -D -m 755 ${b} "${pkgdir}${_jvmdir}/bin/${b}"
      # Copy man page (skip to avoid conflicts)
      # install -D -m 644 ../man/man1/${b}.1 "${pkgdir}/usr/share/man/man1/${b}-${_jdkname}.1"
      # install -D -m 644 ../man/ja/man1/${b}.1 "${pkgdir}/usr/share/man/ja/man1/${b}-${_jdkname}.1"
    fi
  done
  popd

  # Handling 'java-rmi.cgi' separately
  install -D -m 755 bin/java-rmi.cgi "${pkgdir}${_jvmdir}/bin/java-rmi.cgi"

  # link license
  install -d -m 755 "${pkgdir}/usr/share/licenses/"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_openjdk8-shenandoah-src() {
  pkgdesc='OpenJDK Java 8 sources'

  install -D "${srcdir}/${_imgdir}/src.zip" "${pkgdir}${_jvmdir}/src.zip"
}

package_openjdk8-shenandoah-doc() {
  pkgdesc='OpenJDK Java 8 documentation'

  install -d -m 755 "${pkgdir}/usr/share/doc/${pkgbase}/"
  cp -r "${srcdir}"/jdk8u-${_repo_versions[jdk8u]}/build/linux-${_DOC_ARCH}-normal-server-release/docs/* \
    "${pkgdir}/usr/share/doc/${pkgbase}/"
}

# vim: ts=2 sw=2 sts=2
