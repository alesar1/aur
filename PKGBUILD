# Maintainer: Det
# Contributors: Damian Nowak

_pkgname=jdk
pkgname=bin32-jdk7
_major=7
_minor=80
_build=b15
pkgver=${_major}u${_minor}
pkgrel=1
pkgdesc="Oracle Java $_major Development Kit (32-bit) (public release - end of support)"
arch=('x86_64')
url='http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html'
license=('custom')
depends=('ca-certificates-java' 'hicolor-icon-theme' 'java32-environment-common' 'java32-runtime-common'
         'lib32-gcc-libs' 'lib32-libxrender' 'lib32-libxtst' 'lib32-nss' 'xdg-utils')
optdepends=('eclipse: "Oracle Java Mission Control" plugins for Eclipse'
            'lib32-alsa-lib: for basic sound support'
            'lib32-gtk2: for Gtk+ look and feel (desktop)')
provides=("java32-runtime=$_major" "java32-runtime-headless=$_major" "java32-web-start=$_major" "java32-environment=$_major"
          "java32-runtime-jre=$_major" "java32-runtime-headless-jre=$_major" "java32-web-start-jre=$_major" "java32-environment-jdk=$_major"
          "java32-openjfx=$_major")

# Variables
DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')
_jname=${_pkgname}${_major}
_jvmdir=/usr/lib32/jvm/java32-$_major-$_pkgname

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
options=('!strip') # JDK debug-symbols
install=$pkgname.install
#source=("http://download.oracle.com/otn-pub/java/jdk/$pkgver-$_build/$_pkgname-$pkgver-linux-i586.tar.gz"
source=('https://www.dropbox.com/s/j6lb08xu2l9k3kq/jdk-7u80-linux-i586.tar.gz'
        "http://download.oracle.com/otn-pub/java/jce/$_major/UnlimitedJCEPolicyJDK$_major.zip"
        "jconsole32-$_jname.desktop"
        "jmc32-$_jname.desktop"
        "jvisualvm32-$_jname.desktop"
        "policytool32-$_jname.desktop")
md5sums=('0811a4045714bd8f1e1577e318528597'
         'c47e997b90ddfd0d813a37ccc97fb933'
         '721fa304a1f1057c7079330308772ca4'
         '8a9ff08e43c75c4d7460790dff7dfd4a'
         'a16f78eb4c0002fc0e57d95ac9f503f3'
         '28afaff6decb032e3cce3d88f2fca0d7')

package() {
    cd ${_pkgname}1.${_major}.0_${_minor}

    msg2 "Creating directory structure..."
    install -d "$pkgdir"/etc/.java/.systemPrefs
    install -d "$pkgdir"/usr/lib32/jvm/java32-$_major-$_pkgname/bin
    install -d "$pkgdir"/usr/lib32/mozilla/plugins
    install -d "$pkgdir"/usr/share/licenses/java${_major}-${_pkgname}32

    msg2 "Removing redundancies..."
    rm    db/bin/*.bat
    rm    db/3RDPARTY
    rm    db/LICENSE
    rm -r jre/lib/desktop/icons/HighContrast
    rm -r jre/lib/desktop/icons/HighContrastInverse
    rm -r jre/lib/desktop/icons/LowContrast
    rm    jre/lib/fontconfig.*.bfc
    rm    jre/lib/fontconfig.*.properties.src
    rm -r jre/plugin/
    rm    jre/*.txt
    rm    jre/COPYRIGHT
    rm    jre/LICENSE
    rm    jre/README
    rm    man/ja

    msg2 "Moving contents..."
    mv * "$pkgdir"/$_jvmdir

    # Cd to the new playground
    cd "$pkgdir"/$_jvmdir

    msg2 "Fixing directory structure..."
    # Replace duplicate binaries in bin/ with links to jre/bin/
    for i in $(ls jre/bin/); do
        ln -sf "$_jvmdir/jre/bin/$i" "bin/$i"
    done

    # Suffix .desktops + icons (sun-java.png -> sun-java32-$_jname.png)
    for i in $(find jre/lib/desktop/ -type f); do
        rename -- "." "32-$_jname." $i
    done

    # Fix .desktop's
    sed -e '/JavaWS/!s|Name=Java|Name=Java '"$_major"'|' \
        -e "s|Name=JavaWS|Name=JavaWS $_major|" \
        -e "s|Name=.*|& (32-bit)|" \
        -e "s|Comment=Java|Comment=Java $_major|" \
        -e "s|Comment=.*|& (32-bit)|" \
        -e "s|Exec=|Exec=$_jvmdir/jre/bin/|" \
        -e "s|.png|32-$_jname.png|" \
    -i jre/lib/desktop/applications/*

    # Move .desktops + icons to /usr/share
    mv jre/lib/desktop/* "$pkgdir"/usr/share/
    install -m644 "$srcdir"/*.desktop "$pkgdir"/usr/share/applications/

    # Move confs to /etc and link back to /usr: /usr/lib32/jvm/java32-$_jname/jre/lib -> /etc
    for new_etc_path in ${backup[@]}; do
        # Old location
        old_usr_path="jre/lib/${new_etc_path#*$_jname/}"

        # Move
        install -Dm644 "$old_usr_path" "$pkgdir/$new_etc_path"
        ln -sf "/$new_etc_path" "$old_usr_path"
    done

    # Link NPAPI plugin
    ln -sf $_jvmdir/jre/lib/i386/libnpjp2.so "$pkgdir"/usr/lib32/mozilla/plugins/libnpjp2-$_jname.so

    # Replace JKS keystore with 'ca-certificates-java'
    ln -sf /etc/ssl/certs/java/cacerts jre/lib/security/cacerts

    # Suffix man pages
    for i in $(find man/ -type f); do
        mv "$i" "${i/.1}32-$_jname.1"
    done

    # Move man pages
    mv man/ja_JP.UTF-8/ man/ja
    mv man/ "$pkgdir"/usr/share

    # Move/link licenses
    mv db/NOTICE COPYRIGHT LICENSE *.txt "$pkgdir"/usr/share/licenses/java${_major}-${_pkgname}32/
    ln -sf /usr/share/licenses/java${_major}-${_pkgname}32/ "$pkgdir"/usr/share/licenses/$pkgname

    msg2 "Installing Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files..."
    # Replace default "strong", but limited, cryptography to get an "unlimited strength" one for
    # things like 256-bit AES. Enabled by default in OpenJDK:
    # - http://suhothayan.blogspot.com/2012/05/how-to-install-java-cryptography.html
    # - http://www.eyrie.org/~eagle/notes/debian/jce-policy.html
    install -m644 "$srcdir"/UnlimitedJCEPolicy/*.jar jre/lib/security/
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
