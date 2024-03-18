import { useEffect, useMemo, useRef, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

const HistoryTable = (data) => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name',
                header: 'TÊN SẢN PHẨM'
            },
            {
                accessorKey: 'id',
                header: 'STT'
            },
            {
                accessorKey: 'barcode',
                header: 'MÃ HÀNG'
            },
            {
                accessorKey: 'type',
                header: 'TÊN HÀNG'
            },
            {
                accessorKey: 'content',
                header: 'HÀM LƯỢNG'
            },
            {
                accessorKey: 'totalWeight',
                header: 'TỔNG CÂN NẶNG'
            },
            {
                accessorKey: 'indiWeight',
                header: 'CÂN NẶNG HỘT'
            },
            {
                accessorKey: 'price',
                header: 'TIỀN CÔNG'
            },
            {
                accessorKey: 'unitPrice',
                header: 'ĐƠN GIÁ'
            },            {
                accessorKey: 'revenue',
                header: 'THÀNH TIỀN'
            },
            {
                accessorKey: 'buyDate',
                header: 'NGÀY MUA'
            },
            {
                accessorKey: 'sellDate',
                header: 'NGÀY BÁN'
            }
        ]
    );

    const rowVirtualizerInstanceRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [sorting, setSorting] = useState([]);

    useEffect(() => {
        try {
            rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
        } catch (error) {
            console.error(error);
        }
    }, [sorting]);

    console.log(data)

    const table = useMaterialReactTable({
        columns,
        data: data.data,
        defaultDisplayColumn: { enableResizing: true },
        enableBottomToolbar: false,
        enableColumnResizing: true,
        enableColumnVirtualization: true,
        enableGlobalFilterModes: true,
        enablePagination: false,
        enableColumnPinning: true,
        enableRowNumbers: true,
        enableRowVirtualization: true,
        muiTableContainerProps: { sx: { maxHeight: '600px' } },
        onSortingChange: setSorting,
        state: { isLoading, sorting },
        rowVirtualizerInstanceRef, 
        rowVirtualizerOptions: { overscan: 5 },
        columnVirtualizerOptions: { overscan: 2 },
        });
    return <MaterialReactTable table={table} />;
}

export default HistoryTable;