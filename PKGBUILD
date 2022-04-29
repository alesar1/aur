# Maintainer: DragonX256
# Contributor: nougad, edoz90, Det, Edoardo Rosa
# Based on jre: https://aur.archlinux.org/packages/jre/

pkgname=jdk-arm
_pkgname=jdk
_major=8
_minor=331

pkgver=${_major}u${_minor}
pkgrel=1
pkgdesc="Oracle Java Development Kit (v8) for ARMv7, ARMv6 and ARMv8 (64-bit)"
arch=('armv6h' 'armv7h' 'aarch64')
url=http://www.oracle.com/technetwork/java/javase/downloads/index.html
license=('custom:Oracle')
depends=('ca-certificates-java' 'java-environment-common' 'java-runtime-common')
optdepends=('alsa-lib: for basic sound support' 'ttf-font: fonts')
makedepends=('pacman>=4.2.0')
provides=("java-runtime=$_major" "java-runtime-headless=$_major" "java-web-start=$_major" "java-environment=$_major"
"java-runtime-jre=$_major" "java-runtime-headless-jre=$_major" "java-web-start-jre=$_major" "java-environment-jdk=$_major")

DLAGENTS+=('manual::/usr/bin/echo The source file for this package needs to be downloaded manually, since it requires a login and is not redistributable. Please visit http://www.oracle.com/technetwork/java/javase/downloads/index.html')

_jname=${_pkgname}${_major}
_jvmdir=/usr/lib/jvm/java-$_major-$_pkgname

backup=("etc/java-$_jname/arm/jvm.cfg"
"etc/java-$_jname/images/cursors/cursors.properties"
"etc/java-$_jname/management/jmxremote.access"
"etc/java-$_jname/management/management.properties"
"etc/java-$_jname/security/java.policy"
"etc/java-$_jname/security/java.security"
"etc/java-$_jname/content-types.properties"
"etc/java-$_jname/flavormap.properties"
"etc/java-$_jname/fontconfig.properties.src"
"etc/java-$_jname/logging.properties"
"etc/java-$_jname/net.properties"
"etc/java-$_jname/psfont.properties.ja"
"etc/java-$_jname/psfontj2d.properties"
"etc/java-$_jname/sound.properties")
[[ $CARCH = aarch64 ]] && backup[0]="etc/java-$_jname/aarch64/jvm.cfg"
options=('!strip') # JDK debug-symbols
install=$pkgname.install
source=("http://download.oracle.com/otn-pub/java/jce/$_major/jce_policy-$_major.zip"
"jconsole-$_jname.desktop"
"jmc-$_jname.desktop"
"jvisualvm-$_jname.desktop"
"policytool-$_jname.desktop")

source_armv6h=("manual://$_pkgname-$pkgver-linux-arm32-vfp-hflt.tar.gz")
source_armv7h=("$source_armv6h")
source_aarch64=("manual://$_pkgname-$pkgver-linux-aarch64.tar.gz")

md5sums=('a3e1ae256538e8b4162ee8cb0642cb5d'
         'b4f0da18e03f7a9623cb073b65dde6c1'
         '8f0ebcead2aecad67fbd12ef8ced1503'
         'a4a21b064ff9f3c3f3fdb95edf5ac6f3'
         '98245ddb13914a74f0cc5a028fffddca')
md5sums_armv6h=('da7d19efb2cd7363f706c6df3899fcf0')
md5sums_armv7h=("$md5sums_armv6h")
md5sums_aarch64=('f735cded9008b71f9045e58026f711c3')
sha256sums=('9c64997edfce44e29296bfbd0cf90abf8b6b9ef2ea64733adae3bdac9ae2c5a6'
            '105bac73e3b028a3502379e8f51e6c3ecf21e520d85b2b10d4a1103a0dd4cf4b'
            '3c790fd076f5877a4a4604ef4860ee5fe63a75f1c33bde1e9505f7fe246bf8a5'
            '142adba64bba9cafeca2a5e3622a09646fa8b285bb57d63d9f03096580044a61'
            'ef9ecbb758a7fd7755ad1aa0d36cee02bd795e7d54489b92641541198d071f45')
sha256sums_armv6h=('83bcb32b3f52e57aab425e22e35e28b49a81477a21bf184ed0ef1bc74f1a3e16')
sha256sums_armv7h=("$sha256sums_armv6h")
sha256sums_aarch64=('5f8b91fc6d64f1fa8b23a6a83a8f91f1e59dfbb13f3e139e552d31b01ad786ce')

package() {
    cd "${_pkgname}1.${_major}.0_${_minor}" || exit 1

    msg2 "Creating directory structure..."
    install -d "$pkgdir/etc/.java/.systemPrefs"
    install -d "$pkgdir/usr/lib/jvm/java-$_major-$_pkgname/bin"
    install -d "$pkgdir/usr/lib/mozilla/plugins"
    install -d "$pkgdir/usr/share/licenses/java$_major-$_pkgname"

    msg2 "Removing redundancies..."
    rm    jre/lib/fontconfig.*.bfc
    rm    jre/lib/fontconfig.*.properties.src
    rm    jre/*.txt
    rm    jre/COPYRIGHT
    rm    jre/LICENSE
    rm    jre/README
    rm    man/ja

    msg2 "Moving contents..."
    mv ./* "$pkgdir/$_jvmdir"

    # Cd to the new playground
    cd "$pkgdir/$_jvmdir" || exit 1

    msg2 "Fixing directory structure..."
    # Replace duplicate binaries in bin/ with links to jre/bin/
    find jre/bin -print0 | while IFS= read -r -d '' i; do
      ln -sf "$_jvmdir/$i" "bin/$(basename "$i")"
    done

    # Move confs to /etc and link back to /usr: /usr/lib/jvm/java-$_jname/jre/lib -> /etc
    for new_etc_path in "${backup[@]}"; do
        # Old location
        old_usr_path="jre/lib/${new_etc_path#*$_jname/}"

        # Move
        install -Dm644 "$old_usr_path" "$pkgdir/$new_etc_path"
        ln -sf "/$new_etc_path" "$old_usr_path"
    done

    # Replace JKS keystore with 'ca-certificates-java'
    ln -sf "/etc/ssl/certs/java/cacerts jre/lib/security/cacerts"

    # Suffix man pages
    find man/ -type f -print0 | while IFS= read -r -d '' i; do
        mv "$i" "${i/.1}-$_jname.1"
    done

    # Move man pages
    mv man/ja_JP.UTF-8/ man/ja
    mv "man/" "$pkgdir/usr/share"

    # Move/link licenses
    mv "COPYRIGHT" "LICENSE" ./*.txt "$pkgdir/usr/share/licenses/java$_major-$_pkgname/"
    ln -sf "/usr/share/licenses/java$_major-$_pkgname/" "$pkgdir/usr/share/licenses/$_pkgname"

    msg2 "Installing Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files..."
    # Replace default "strong", but limited, cryptography to get an "unlimited strength" one for
    # things like 256-bit AES. Enabled by default in OpenJDK:
    # - http://suhothayan.blogspot.com/2012/05/how-to-install-java-cryptography.html
    # - http://www.eyrie.org/~eagle/notes/debian/jce-policy.html
    install -m644 "$srcdir/UnlimitedJCEPolicyJDK$_major/"*.jar "jre/lib/security/"
    install -Dm644 "$srcdir/UnlimitedJCEPolicyJDK$_major/README.txt" \
        "$pkgdir/usr/share/doc/$_pkgname/README_-_Java_JCE_Unlimited_Strength.txt"

    msg2 "Enabling copy+paste in unsigned applets..."
    # Copy/paste from system clipboard to unsigned Java applets has been disabled since 6u24:
    # - https://blogs.oracle.com/kyle/entry/copy_and_paste_in_java
    # - http://slightlyrandombrokenthoughts.blogspot.com/2011/03/oracle-java-applet-clipboard-injection.html
    _line=$(awk '/permission/{a=NR}; END{print a}' "$pkgdir/etc/java-$_jname/security/java.policy")
    sed "$_line a\\\\n \
        // (AUR) Allow unsigned applets to read system clipboard, see:\n \
        // - https://blogs.oracle.com/kyle/entry/copy_and_paste_in_java\n \
        // - http://slightlyrandombrokenthoughts.blogspot.com/2011/03/oracle-java-applet-clipboard-injection.html\n \
        permission java.awt.AWTPermission \"accessClipboard\";" \
        -i "$pkgdir/etc/java-$_jname/security/java.policy"
}
