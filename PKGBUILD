# Maintainer: Det
# Contributors: josephgbr

_pkgname=jre
pkgname=bin32-jre7
_major=7
_minor=79
_build=b15
pkgver=${_major}u${_minor}
pkgrel=2
pkgdesc="Oracle Java $_major Runtime Environment (32-bit) (public release - end of support)"
arch=('x86_64')
url='http://www.oracle.com/technetwork/java/javase/downloads/jre7-downloads-1880261.html'
license=('custom')
depends_x86_64=('ca-certificates-java' 'desktop-file-utils' 'hicolor-icon-theme' 'java32-runtime-common'
                'lib32-glibc' 'lib32-libjpeg-turbo' 'lib32-lcms2' 'lib32-libxrender' 'lib32-libxtst'
                'lib32-nss' 'shared-mime-info' 'xdg-utils')
optdepends_x86_64=('lib32-alsa-lib: for basic sound support'
                   'lib32-gtk2: for Gtk+ look and feel (desktop)'
                   'ttf-font: fonts')
makedepends_x86_64=('pacman>=4.2.0')
provides=("java32-runtime=$_major" "java32-runtime-headless=$_major" "java32-web-start=$_major"
          "java32-runtime-jre=$_major" "java32-runtime-headless-jre=$_major" "java32-web-start-jre=$_major")

# Variables
DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')
_jname=${_pkgname}${_major}
_jvmdir=/usr/lib32/jvm/java32-$_major-$_pkgname/jre

backup=("etc/java32-$_jname/i386/jvm.cfg"
        "etc/java32-$_jname/images/cursors/cursors.properties"
        "etc/java32-$_jname/management/jmxremote.access"
        "etc/java32-$_jname/management/management.properties"
        "etc/java32-$_jname/security/java.policy"
        "etc/java32-$_jname/security/java.security"
        "etc/java32-$_jname/security/javaws.policy"
        "etc/java32-$_jname/content-types.properties"
        "etc/java32-$_jname/flavormap.properties"
        "etc/java32-$_jname/fontconfig.properties.src"
        "etc/java32-$_jname/logging.properties"
        "etc/java32-$_jname/net.properties"
        "etc/java32-$_jname/psfont.properties.ja"
        "etc/java32-$_jname/psfontj2d.properties"
        "etc/java32-$_jname/sound.properties")
install=$pkgname.install
source=("http://download.oracle.com/otn-pub/java/jce/$_major/UnlimitedJCEPolicyJDK$_major.zip"
        "policytool32-$_jname.desktop")
source_x86_64=("http://download.oracle.com/otn-pub/java/jdk/$pkgver-$_build/$_pkgname-$pkgver-linux-i586.tar.gz")
md5sums=('c47e997b90ddfd0d813a37ccc97fb933'
         'ab6a5ad84bfdcfb949651e7bb83b682e')
md5sums_x86_64=('eba02bbd1dcb9546fed93a9854b84ed9')

package() {
    cd ${_pkgname}1.${_major}.0_${_minor}

    msg2 "Creating directory structure..."
    install -d "$pkgdir"/etc/.java/.systemPrefs
    install -d "$pkgdir"/usr/lib32/jvm/java32-$_major-$_pkgname/jre/bin
    install -d "$pkgdir"/usr/lib32/mozilla/plugins
    install -d "$pkgdir"/usr/share/licenses/java${_major}-${_pkgname}32

    msg2 "Removing redundancies..."
    rm -r lib/desktop/icons/HighContrast
    rm -r lib/desktop/icons/HighContrastInverse
    rm -r lib/desktop/icons/LowContrast
    rm    lib/fontconfig.*.bfc
    rm    lib/fontconfig.*.properties.src
    rm    man/ja
    rm -r plugin/

    msg2 "Moving contents..."
    mv * "$pkgdir"/$_jvmdir

    # Cd to the new playground
    cd "$pkgdir"/$_jvmdir

    msg2 "Fixing directory structure..."
    # Suffix .desktops + icons (sun-java.png -> sun-java32-$_jname.png)
    for i in $(find lib/desktop/ -type f); do
        rename -- "." "32-$_jname." $i
    done

    # Fix .desktop paths
    sed -e "s|Exec=|&$_jvmdir/bin/|" \
        -e "s|.png|32-$_jname.png|" \
    -i lib/desktop/applications/*

    # Move .desktops + icons to /usr/share
    mv lib/desktop/* "$pkgdir"/usr/share/
    install -m644 "$srcdir"/*.desktop "$pkgdir"/usr/share/applications/

    # Move confs to /etc and link back to /usr: /usr/lib32/jvm/java32-$_jname/lib -> /etc
    for new_etc_path in ${backup[@]}; do
        # Old location
        old_usr_path="lib/${new_etc_path#*$_jname/}"

        # Move
        install -Dm644 "$old_usr_path" "$pkgdir/$new_etc_path"
        ln -sf "/$new_etc_path" "$old_usr_path"
    done

    # Link NPAPI plugin
    ln -sf $_jvmdir/lib/i386/libnpjp2.so "$pkgdir"/usr/lib32/mozilla/plugins/libnpjp2-$_jname.so

    # Replace JKS keystore with 'ca-certificates-java'
    ln -sf /etc/ssl/certs/java/cacerts lib/security/cacerts

    # Suffix man pages
    for i in $(find man/ -type f); do
        mv "$i" "${i/.1}32-$_jname.1"
    done

    # Move man pages
    mv man/ja_JP.UTF-8/ man/ja
    mv man/ "$pkgdir"/usr/share

    # Move/link licenses
    mv COPYRIGHT LICENSE README *.txt "$pkgdir"/usr/share/licenses/java${_major}-${_pkgname}32/
    ln -sf /usr/share/licenses/java${_major}-${_pkgname}32/ "$pkgdir"/usr/share/licenses/$pkgname

    msg2 "Installing Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files..."
    # Replace default "strong", but limited, cryptography to get an "unlimited strength" one for
    # things like 256-bit AES. Enabled by default in OpenJDK:
    # - http://suhothayan.blogspot.com/2012/05/how-to-install-java-cryptography.html
    # - http://www.eyrie.org/~eagle/notes/debian/jce-policy.html
    install -m644 "$srcdir"/UnlimitedJCEPolicy/*.jar lib/security/
    install -Dm644 "$srcdir"/UnlimitedJCEPolicy/README.txt \
                   "$pkgdir"/usr/share/doc/$pkgname/README_-_Java_JCE_Unlimited_Strength.txt

    msg2 "Enabling copy+paste in unsigned applets..."
    # Copy/paste from system clipboard to unsigned Java applets has been disabled since 6u24:
    # - https://blogs.oracle.com/kyle/entry/copy_and_paste_in_java
    # - http://slightlyrandombrokenthoughts.blogspot.com/2011/03/oracle-java-applet-clipboard-injection.html
    _line=$(awk '/permission/{a=NR}; END{print a}' "$pkgdir"/etc/java32-$_jname/security/java.policy)
    sed "$_line a\\\\n \
        // (AUR) Allow unsigned applets to read system clipboard, see:\n \
        // - https://blogs.oracle.com/kyle/entry/copy_and_paste_in_java\n \
        // - http://slightlyrandombrokenthoughts.blogspot.com/2011/03/oracle-java-applet-clipboard-injection.html\n \
        permission java.awt.AWTPermission \"accessClipboard\";" \
    -i "$pkgdir"/etc/java32-$_jname/security/java.policy
}
