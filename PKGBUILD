# Maintainer: Guillaume ALAUX <guillaume@archlinux.org>
# Contributor: Boyan Ding <stu_dby@126.com>

# TODO
# once icedtea:
#   pulse
#   add policytool desktop files

# Package 'openjfx' must be updated when this one is
pkgname=('jre8-openjdk-jetbrains-headless' 'jre8-openjdk-jetbrains' 'jdk8-openjdk-jetbrains' 'openjdk8-jetbrains-src' 'openjdk8-jetbrains-doc')
pkgbase=java8-openjdk-jetbrains
_java_ver=8
# Found @ https://github.com/JetBrains/jdk8u/releases
_jdk_update=202
_jdk_build=1483.37
pkgver=${_java_ver}.u${_jdk_update}.b${_jdk_build}
_repo_ver=jb${_java_ver}u${_jdk_update}-b${_jdk_build}
pkgrel=1
arch=('x86_64')
url='https://github.com/JetBrains/jdk8u'
license=('custom')
makedepends=('java-environment=8' 'cpio' 'unzip' 'zip'
             'libxrender' 'libxtst' 'fontconfig' 'libcups' 'alsa-lib')
_url_src=https://github.com/JetBrains/jdk8u
source=(jdk8u-${_repo_ver}.tar.gz::${_url_src}/archive/${_repo_ver}.tar.gz
        corba-${_repo_ver}.tar.gz::${_url_src}_corba/archive/${_repo_ver}.tar.gz
        hotspot-${_repo_ver}.tar.gz::${_url_src}_hotspot/archive/${_repo_ver}.tar.gz
        jdk-${_repo_ver}.tar.gz::${_url_src}_jdk/archive/${_repo_ver}.tar.gz
        jaxws-${_repo_ver}.tar.gz::${_url_src}_jaxws/archive/${_repo_ver}.tar.gz
        jaxp-${_repo_ver}.tar.gz::${_url_src}_jaxp/archive/${_repo_ver}.tar.gz
        langtools-${_repo_ver}.tar.gz::${_url_src}_langtools/archive/${_repo_ver}.tar.gz
        nashorn-${_repo_ver}.tar.gz::${_url_src}_nashorn/archive/${_repo_ver}.tar.gz)

sha256sums=('d132af8f137c02a3faef8e4a032112a5f727cb0d5b156c631890e82e3ac63dcf'
            'c77163362c04f03e62c7f97d3dbe95365759229a5b13da76efa6c0251cf6c762'
            'a67dfa1dce8704d426af4b1039deae915a841f2c4212ee938a88c11631334988'
            '8c738923146e205d662f973be1fdaace52e0c39e4fef3e986b32a48be6d3ca84'
            '7fba5b83f2cd2faca73ee65bce3b951a29601f34e9c1eac653ee4af10b79b95f'
            '21cb5f986236566bfd7555be87b56280d23020bf8e5ad8d4031f0c6a5883356b'
            '549a808846db98e6746bd4b95fdc8b70483e4baa1e3fc5eaa341dcec2ac65f2a'
            '4e962e58c989c20d5dc0c3ecd177b361aac132db2fb79dba06c38e9be8c5f777')

case "${CARCH}" in
  'x86_64') _JARCH=amd64 ; _DOC_ARCH=x86_64 ;;
  'i686'  ) _JARCH=i386  ; _DOC_ARCH=x86    ;;
esac

_jdkname=openjdk8-jetbrains
_jvmdir=/usr/lib/jvm/java-8-openjdk-jetbrains
_prefix="jdk8u-${_repo_ver}/image"
_imgdir="${_prefix}/jvm/openjdk-1.8.0_$(printf '%.2d' ${_jdk_update})"
_nonheadless=(bin/policytool
              lib/${_JARCH}/libjsound.so
              lib/${_JARCH}/libjsoundalsa.so
              lib/${_JARCH}/libsplashscreen.so)

prepare() {
  cd "${srcdir}/jdk8u-${_repo_ver}"
  for subrepo in corba hotspot jdk jaxws jaxp langtools nashorn; do
    ln -s ../jdk8u_${subrepo}-${_repo_ver} ${subrepo}
  done
}

build() {
  cd "${srcdir}/jdk8u-${_repo_ver}"

  # Detecting Java version by the first line of the output
  # of `java --version` is such a great idea
  unset JAVA_HOME _JAVA_OPTIONS
  # http://icedtea.classpath.org/bugzilla/show_bug.cgi?id=1346
  export MAKEFLAGS=${MAKEFLAGS/-j*}

  # We filter out -O flags so that the optimization of HotSpot is not lowered from O3 to O2
  export CFLAGS="${CFLAGS//-O2/-O3} ${CPPFLAGS} -Wno-error=deprecated-declarations -Wno-error=stringop-overflow= -Wno-error=return-type -Wno-error=cpp -fno-lifetime-dse -fno-delete-null-pointer-checks"
  export CXXFLAGS="${CXXFLAGS} ${CPPFLAGS}"

  # Fix building on Linux 5+ https://github.com/JetBrains/jdk8u/issues/16
  export DISABLE_HOTSPOT_OS_VERSION_CHECK=ok

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

check() {
  cd "${srcdir}/jdk8u-${_repo_ver}"
  make -k test
}

package_jre8-openjdk-jetbrains-headless() {
  pkgdesc='OpenJDK Java 8 headless runtime environment (with JetBrains patches)'
  depends=('java-runtime-common' 'ca-certificates-utils' 'nss')
  optdepends=('java-rhino: for some JavaScript support')
  provides=('java-runtime-headless=8' 'java-runtime-headless-openjdk=8' 'java-runtime-headless-openjdk-jetbrains=8')
  # Upstream config files that should go to etc and get backup
  _backup_etc=(etc/java-8-openjdk-jetbrains/${_JARCH}/jvm.cfg
               etc/java-8-openjdk-jetbrains/calendars.properties
               etc/java-8-openjdk-jetbrains/content-types.properties
               etc/java-8-openjdk-jetbrains/flavormap.properties
               etc/java-8-openjdk-jetbrains/images/cursors/cursors.properties
               etc/java-8-openjdk-jetbrains/logging.properties
               etc/java-8-openjdk-jetbrains/management/jmxremote.access
               etc/java-8-openjdk-jetbrains/management/jmxremote.password
               etc/java-8-openjdk-jetbrains/management/management.properties
               etc/java-8-openjdk-jetbrains/management/snmp.acl
               etc/java-8-openjdk-jetbrains/net.properties
               etc/java-8-openjdk-jetbrains/psfont.properties.ja
               etc/java-8-openjdk-jetbrains/psfontj2d.properties
               etc/java-8-openjdk-jetbrains/security/java.policy
               etc/java-8-openjdk-jetbrains/security/java.security
               etc/java-8-openjdk-jetbrains/sound.properties)
  backup=(${_backup_etc[@]})
  install=install_jre8-openjdk-jetbrains-headless.sh

  cd "${srcdir}/${_imgdir}/jre"

  install -d -m 755 "${pkgdir}${_jvmdir}/jre/"
  cp -rv --no-preserve=ownership bin lib "${pkgdir}${_jvmdir}/jre"

  # Set config files
  mv "${pkgdir}${_jvmdir}"/jre/lib/management/jmxremote.password{.template,}
  mv "${pkgdir}${_jvmdir}"/jre/lib/management/snmp.acl{.template,}

  # Remove 'non-headless' lib files
  for f in ${_nonheadless[@]}; do
    rm "${pkgdir}${_jvmdir}/jre/${f}"
  done

  # Man pages
  pushd "${pkgdir}${_jvmdir}/jre/bin"
  install -d -m 755 "${pkgdir}"/usr/share/man/{,ja/}man1/
  for file in *; do
    if [[ -f "${srcdir}/${_imgdir}/man/man1/${file}.1" ]]; then
      install -m 644 "${srcdir}/${_imgdir}/man/man1/${file}.1" \
        "${pkgdir}/usr/share/man/man1/${file}-${_jdkname}.1"
      install -m 644 "${srcdir}/${_imgdir}/man/ja/man1/${file}.1" \
        "${pkgdir}/usr/share/man/ja/man1/${file}-${_jdkname}.1"
    fi
  done
  popd

  # Link JKS keystore from ca-certificates-utils
  rm -f "${pkgdir}${_jvmdir}/jre/lib/security/cacerts"
  ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}${_jvmdir}/jre/lib/security/cacerts"

  # Install license
  install -d -m 755 "${pkgdir}/usr/share/licenses/${pkgbase}/"
  install -m 644 ASSEMBLY_EXCEPTION LICENSE THIRD_PARTY_README \
                 "${pkgdir}/usr/share/licenses/${pkgbase}"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"

  # Move config files that were set in _backup_etc from ./lib to /etc
  for file in ${_backup_etc[@]}; do
    _filepkgpath=${_jvmdir}/jre/lib/${file#etc/java-8-openjdk-jetbrains/}
    install -D -m 644 "${pkgdir}${_filepkgpath}" "${pkgdir}/${file}"
    ln -sf /${file} "${pkgdir}${_filepkgpath}"
  done
}

package_jre8-openjdk-jetbrains() {
  pkgdesc='OpenJDK Java 8 full runtime environment (with JetBrains patches)'
  depends=("jre8-openjdk-jetbrains-headless=${pkgver}-${pkgrel}" 'xdg-utils' 'hicolor-icon-theme')
  optdepends=('icedtea-web: web browser plugin + Java Web Start'
              'alsa-lib: for basic sound support'
              'gtk2: for the Gtk+ look and feel - desktop usage'
              'java-openjfx: for JavaFX GUI components support')
  # TODO when adding IcedTea: 'giflib: for gif format support'
  # TODO when adding IcedTea: 'libpulse: for advanced sound support'
  provides=('java-runtime=8' 'java-runtime-openjdk=8' 'java-runtime-openjdk-jetbrains=8')
  install=install_jre8-openjdk-jetbrains.sh

  cd "${srcdir}/${_imgdir}/jre"

  for f in ${_nonheadless[@]}; do
    install -D ${f} "${pkgdir}${_jvmdir}/jre/${f}"
  done

  # Man pages
  pushd "${pkgdir}${_jvmdir}/jre/bin"
  install -d -m 755 "${pkgdir}"/usr/share/man/{,ja/}man1/
  for file in *; do
    install -m 644 "${srcdir}/${_imgdir}/man/man1/${file}.1" \
      "${pkgdir}/usr/share/man/man1/${file}-${_jdkname}.1"
    install -m 644 "${srcdir}/${_imgdir}/man/ja/man1/${file}.1" \
      "${pkgdir}/usr/share/man/ja/man1/${file}-${_jdkname}.1"
  done
  popd

  # Desktop files
  # TODO add these when switching to IcedTea
  #install -D -m 644 "${srcdir}/icedtea-${_icedtea_ver}/policytool.desktop" \
  #                  "${pkgdir}/usr/share/applications/policytool.desktop"

  # Install license
  install -d -m 755 "${pkgdir}/usr/share/licenses/${pkgbase}/"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_jdk8-openjdk-jetbrains() {
  pkgdesc='OpenJDK Java 8 development kit (with JetBrains patches)'
  depends=('java-environment-common' "jre8-openjdk-jetbrains=${pkgver}-${pkgrel}")
  provides=('java-environment=8' 'java-environment-openjdk=8' 'java-environment-openjdk-jetbrains=8')
  install=install_jdk8-openjdk-jetbrains.sh

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
      # Copy man page
      install -D -m 644 ../man/man1/${b}.1 "${pkgdir}/usr/share/man/man1/${b}-${_jdkname}.1"
      install -D -m 644 ../man/ja/man1/${b}.1 "${pkgdir}/usr/share/man/ja/man1/${b}-${_jdkname}.1"
    fi
  done
  popd

  # Handling 'java-rmi.cgi' separately
  install -D -m 755 bin/java-rmi.cgi "${pkgdir}${_jvmdir}/bin/java-rmi.cgi"

  # link license
  install -d -m 755 "${pkgdir}/usr/share/licenses/"
  ln -sf /usr/share/licenses/${pkgbase} "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_openjdk8-jetbrains-src() {
  pkgdesc='OpenJDK Java 8 sources (with JetBrains patches)'

  install -D "${srcdir}/${_imgdir}/src.zip" "${pkgdir}${_jvmdir}/src.zip"
}

package_openjdk8-jetbrains-doc() {
  pkgdesc='OpenJDK Java 8 documentation (with JetBrains patches)'

  install -d -m 755 "${pkgdir}/usr/share/doc/${pkgbase}/"
  cp -r "${srcdir}"/jdk8u-${_repo_ver}/build/linux-${_DOC_ARCH}-normal-server-release/docs/* \
    "${pkgdir}/usr/share/doc/${pkgbase}/"
}

# vim: ts=2 sw=2 sts=2
