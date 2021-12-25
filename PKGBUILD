# Maintainer: Jan-Henrik Bruhn <aur@jhbruhn.de>
# Contributor: Max Stabel <max dot stabel03 at gmail dot com>

_ltspice_ver_roman="XVII"
_ltspice_ver="17"

pkgname=ltspice
pkgver=17.20211222.2
pkgrel=1
pkgdesc="SPICE simulator, schematic capture and waveform viewer. Installation based on Field Update Utility."
arch=('x86_64')
url="http://www.linear.com/designtools/software/"
license=('custom')
depends=('wine')
makedepends=('git' 'curl' 'cksfv' 'icoutils' 'imagemagick' 'gendesk')

_update_url="https://ltspice.analog.com/fieldsync$_ltspice_ver_roman"

source=("$pkgname.sh"
        "$pkgname-help.sh")
sha256sums=('7b73449a9b7de53b65d132a40fdee3c8706181a7b699c362e399e67c92bedc58'
            'ff14cff95172bbf685bc39801910edd70ee9499dee450270529c043946cc591c')
_curl_opts="-s --connect-timeout 60 --retry 3 --retry-delay 1"

_download_file() {
    file=$1
    crc=$2
        
    _download=true
    # check whether cached file with correct CRC exists
    if [ -s "$pkgname/$file" ]; then
        f_crc=$(cksfv -c "$pkgname/$file" | sed '/^;/d' | awk '{print $2}')
        if [ "$crc" = "$f_crc" ]; then
            _download=false
        fi
    fi

    if [ "$_download" = true ]; then
        mkdir -p "${pkgname}/$(dirname $file)"

        output="$pkgname/$file"
        if [ -f "$output" ]; then
            rm -f $output
        fi
        # first try compressed path and decompress
        url="${_update_url}/${file}.gz"
        compressed="${pkgname}/${file}.gz"
        curl -f $_curl_opts $url > $compressed && curlcode=$? || curlcode=$?
        if [ -s "$compressed" ] && [ $curlcode -eq 0 ]; then
            # echo "compressed: $output"
            cat $compressed | gunzip > $output
            rm $compressed
        fi 
        # download uncompressed file if compressed was not found
        if [ ! -s "$output" ]; then
            url="${_update_url}/${file}"
            curl  $_curl_opts -S $url > $output && curlcode=$? || curlcode=$?
        fi

        if [ ! -s "$output" ] || [ $curlcode -ne 0 ]; then
            echo "Download error ($curlcode): $output / $url"
            echo ""
        # else
            # echo "uncompressed: $output"
        fi
    fi
    return 0
}

# initialize a semaphore with a given number of tokens
open_sem(){
    mkfifo pipe-$$
    exec 3<>pipe-$$
    rm pipe-$$
    local i=$1
    for((;i>0;i--)); do
        printf %s 000 >&3
    done
}

# run the given command asynchronously and pop/push tokens
run_with_lock(){
    local x
    # this read waits until there is something to read
    read -u 3 -n 3 x && ((0==x)) || exit $x
    (
     ( "$@"; )
    # push the return code of the command to the semaphore
    printf '%.3d' $? >&3
    )&
}

N=$(($(nproc) * 4))
open_sem $N

prepare() {
    mkdir -p $pkgname

    _download_file "Changelog.txt" ""
    release_logs="$_update_url/release.log.gz"
    
    curl $_curl_opts "$release_logs" | gunzip > ./release.log
    
    total=$(cat release.log | sed '/^#/d' | wc -l)
    count=0
    echo "Checking cache and downloading using $N threads."
    echo "Starting..."
    for entry in $(cat release.log | sed '/^#/d' | awk '{print $6"/"$8}')
    do
        IFS='/' read -ra entry <<< "$entry"
        file="${entry[1]//'\'/"/"}"
        file="${file:2}"
        file="${file//$'\n'}"
        file="${file//$'\r'}"
        crc=${entry[0]}
        # download files from list, checking the CRC (something is still wrong with the CRC it seems)
        run_with_lock _download_file "$file" "$crc"
        count=$((count+1))
        echo -n -e "\033[1K\rDownload Progress: $count/$total ($file)"
    done
    
    wait

    echo ""

    echo "Downloaded all files!"

}

build() {
    wrestool -x -t 14 "${srcdir}/${pkgname}/XVIIx64.exe" > ${srcdir}/$pkgname.ico
    convert ${srcdir}/ltspice.ico ${srcdir}/$pkgname.png
    rm ${srcdir}/$pkgname.ico

    gendesk --pkgname "$pkgname" --pkgdesc "$pkgdesc" -n --name="LTSpice" --exec="/usr/bin/ltspice" -f
}

package()
{
    cd "$pkgname"

    # Install License
    install -Dm644 License.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    # Install Desktop file
    install -Dm644 ${srcdir}/ltspice.png "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -Dm644 "${srcdir}/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"

    # Install docs to /usr/share/doc/
    install -Dm644 LTspiceHelp.chm "${pkgdir}/usr/share/doc/${pkgname}/ltspice.chm"

    # Install binary files to /opt
    install -m755 -d "$pkgdir/opt/$pkgname"
    cp -r * "$pkgdir/opt/$pkgname"

    #Install /usr/bin startscript
    install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
    install -Dm755 "$srcdir/$pkgname-help.sh" "$pkgdir/usr/bin/$pkgname-help"
}

pkgver() {
    cd "$pkgname"
    date=$(cat Changelog.txt | head -n1 | awk '{print $1}')
    count=$(grep -c "$date" Changelog.txt)
    date_format=$(echo $date | awk -F/ '{print "20"$3$1$2}')
    echo "$_ltspice_ver.$date_format.$count"
}
